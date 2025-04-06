"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanDetailsController = void 0;
const common_1 = require("@nestjs/common");
const loan_details_service_1 = require("./loan-details.service");
const loan_details_dto_1 = require("../dto/loan-details.dto");
const response_dto_1 = require("../dto/response.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
let LoanDetailsController = class LoanDetailsController {
    constructor(loanService) {
        this.loanService = loanService;
        this.collection = 'loanDetails';
    }
    async createLoanDetails(loanDetails) {
        await this.loanService.create(loanDetails);
        return new response_dto_1.ApiResponse({ message: "created" });
    }
    async getLoanDetails() {
        const data = await this.loanService.findAll();
        return new response_dto_1.ApiResponse(data);
    }
    async deleteLoanDetails(id) {
        const deleted = await this.loanService.remove(id);
        if (!deleted) {
            return new response_dto_1.ApiResponse({ message: "loan not found" });
        }
        return new response_dto_1.ApiResponse({ message: "deleted" });
    }
    async verifyEntry(id) {
        console.log('Verifying entry with ID:', id);
        const updatedEntry = await this.loanService.verifyEntry(id);
        return new response_dto_1.ApiResponse(updatedEntry || { message: "Entry not found" });
    }
    async rejectEntry(id) {
        console.log('Rejecting entry with ID:', id);
        const updatedEntry = await this.loanService.rejectEntry(id);
        return new response_dto_1.ApiResponse(updatedEntry || { message: "Entry not found" });
    }
    async acceptEntry(id) {
        console.log('Accepting entry with ID:', id);
        const updatedEntry = await this.loanService.acceptEntry(id);
        return new response_dto_1.ApiResponse(updatedEntry || { message: "Entry not found" });
    }
};
exports.LoanDetailsController = LoanDetailsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, roles_decorator_1.Roles)('Admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loan_details_dto_1.CreateLoanDetailsDto]),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "createLoanDetails", null);
__decorate([
    (0, common_1.Get)('many'),
    (0, roles_decorator_1.Roles)('Verifier', 'Admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "getLoanDetails", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('Admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "deleteLoanDetails", null);
__decorate([
    (0, common_1.Patch)(':id/verify'),
    (0, roles_decorator_1.Roles)('Verifier', 'Admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "verifyEntry", null);
__decorate([
    (0, common_1.Patch)(':id/reject'),
    (0, roles_decorator_1.Roles)('Verifier', 'Admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "rejectEntry", null);
__decorate([
    (0, common_1.Patch)(':id/accept'),
    (0, roles_decorator_1.Roles)('Admin'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoanDetailsController.prototype, "acceptEntry", null);
exports.LoanDetailsController = LoanDetailsController = __decorate([
    (0, common_1.Controller)('loan'),
    __param(0, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [loan_details_service_1.LoanDetailsService])
], LoanDetailsController);
//# sourceMappingURL=loan-details.controller.js.map