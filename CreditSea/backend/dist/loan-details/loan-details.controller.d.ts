import { LoanDetailsService } from './loan-details.service';
import { CreateLoanDetailsDto } from 'src/dto/loan-details.dto';
import { ApiResponse } from 'src/dto/response.dto';
export declare class LoanDetailsController {
    private readonly loanService;
    private readonly collection;
    constructor(loanService: LoanDetailsService);
    createLoanDetails(loanDetails: CreateLoanDetailsDto): Promise<ApiResponse>;
    getLoanDetails(): Promise<ApiResponse>;
    deleteLoanDetails(id: string): Promise<ApiResponse>;
    verifyEntry(id: string): Promise<ApiResponse>;
    rejectEntry(id: string): Promise<ApiResponse>;
    acceptEntry(id: string): Promise<ApiResponse>;
}
