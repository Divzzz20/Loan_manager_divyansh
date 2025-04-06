import { LoanStatus } from "src/enums/status.enum";
export declare class ResponseLoanDetailsDto {
    fullName: string;
    requiredAmount: string;
    dateApplied: Date;
    loanStatus: LoanStatus;
}
