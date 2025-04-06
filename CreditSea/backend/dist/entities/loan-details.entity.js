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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanDetailsSchema = exports.LoanDetails = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const status_enum_1 = require("../enums/status.enum");
let LoanDetails = class LoanDetails {
};
exports.LoanDetails = LoanDetails;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LoanDetails.prototype, "loanTenure", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "requiredAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "employmentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "address1", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "address2", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], LoanDetails.prototype, "dateApplied", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LoanDetails.prototype, "loanStatus", void 0);
exports.LoanDetails = LoanDetails = __decorate([
    (0, mongoose_1.Schema)()
], LoanDetails);
exports.LoanDetailsSchema = mongoose_1.SchemaFactory.createForClass(LoanDetails);
//# sourceMappingURL=loan-details.entity.js.map