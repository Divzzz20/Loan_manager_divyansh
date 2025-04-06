import { LoanStatus } from "src/enums/status.enum";
export declare class LoanDetails {
    fullName: string;
    loanTenure: number;
    reason?: string;
    requiredAmount: string;
    employmentStatus: string;
    address1: string;
    address2: string;
    dateApplied: Date;
    loanStatus: LoanStatus;
}
export declare const LoanDetailsSchema: import("mongoose").Schema<LoanDetails, import("mongoose").Model<LoanDetails, any, any, any, import("mongoose").Document<unknown, any, LoanDetails> & LoanDetails & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LoanDetails, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LoanDetails>> & import("mongoose").FlatRecord<LoanDetails> & {
    _id: import("mongoose").Types.ObjectId;
}>;
