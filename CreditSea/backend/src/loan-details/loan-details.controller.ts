import { Body, Controller, Get, Inject, Post, Delete, Param, Patch } from '@nestjs/common';
import { LoanDetailsService } from './loan-details.service';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ApiResponse } from 'src/dto/response.dto';
import { Roles } from '../decorators/roles.decorator';

@Controller('loan')
export class LoanDetailsController {
    private readonly collection = 'loanDetails'; // Define the collection name

    constructor(@Inject() private readonly loanService: LoanDetailsService) {}

    @Post('create')
    @Roles('Admin') // Only Admin can create loans
    async createLoanDetails(@Body() loanDetails: CreateLoanDetailsDto) {
        await this.loanService.create(loanDetails);
        return new ApiResponse({ message: "created" });
    }

    @Get('many')
    @Roles('Verifier', 'Admin') // Both Verifier and Admin can view loans
    async getLoanDetails() {
        const data = await this.loanService.findAll();
        return new ApiResponse(data);
    }

    @Delete(':id')
    @Roles('Admin') // Only Admin can delete loans
    async deleteLoanDetails(@Param('id') id: string) {
        const deleted = await this.loanService.remove(id);
        if (!deleted) {
            return new ApiResponse({ message: "loan not found" });
        }
        return new ApiResponse({ message: "deleted" });
    }

    @Patch(':id/verify')
    @Roles('Verifier', 'Admin') // Allow both Verifier and Admin to verify entries
    async verifyEntry(@Param('id') id: string) {
        console.log('Verifying entry with ID:', id); // Debugging line
        const updatedEntry = await this.loanService.verifyEntry(id);
        return new ApiResponse(updatedEntry || { message: "Entry not found" });
    }

    @Patch(':id/reject')
    @Roles('Verifier', 'Admin') // Allow both Verifier and Admin to reject entries
    async rejectEntry(@Param('id') id: string) {
        console.log('Rejecting entry with ID:', id); // Debugging line
        const updatedEntry = await this.loanService.rejectEntry(id);
        return new ApiResponse(updatedEntry || { message: "Entry not found" });
    }

    @Patch(':id/accept')
    @Roles('Admin') // Only Admin can accept loans
    async acceptEntry(@Param('id') id: string) {
        console.log('Accepting entry with ID:', id);
        const updatedEntry = await this.loanService.acceptEntry(id);
        return new ApiResponse(updatedEntry || { message: "Entry not found" });
    }
}
