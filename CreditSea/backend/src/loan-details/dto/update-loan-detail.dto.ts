export class UpdateLoanDetailDto {
    // Define the properties for updating loan details
    id: string;
    amount?: number;
    term?: number;
    interestRate?: number;
    borrowerName?: string;
}
