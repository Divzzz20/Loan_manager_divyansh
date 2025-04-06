import { LoanStatus } from "src/enums/status.enum";
export declare class CreateLoanDetailsDto {
    fullName: string;
    loanTenure: number;
    reason?: string;
    requiredAmount: string;
    employmentStatus: string;
    address1: string;
    address2: string;
    dateApplied: Date;
    loanStatus: LoanStatus;
    borrowerName: string;
    amount: number;
    term: number;
    interestRate: number;
}
