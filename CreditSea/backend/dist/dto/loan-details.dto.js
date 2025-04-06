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
exports.CreateLoanDetailsDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const status_enum_1 = require("../enums/status.enum");
class CreateLoanDetailsDto {
}
exports.CreateLoanDetailsDto = CreateLoanDetailsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "fullName", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateLoanDetailsDto.prototype, "loanTenure", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "requiredAmount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "employmentStatus", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "address1", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "address2", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateLoanDetailsDto.prototype, "dateApplied", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(status_enum_1.LoanStatus),
    __metadata("design:type", String)
], CreateLoanDetailsDto.prototype, "loanStatus", void 0);
//# sourceMappingURL=loan-details.dto.js.map