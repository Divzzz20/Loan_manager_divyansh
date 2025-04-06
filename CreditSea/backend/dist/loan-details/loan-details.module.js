"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const loan_details_controller_1 = require("./loan-details.controller");
const loan_details_service_1 = require("./loan-details.service");
const local_storage_service_1 = require("../services/local-storage.service");
let LoanDetailsModule = class LoanDetailsModule {
};
exports.LoanDetailsModule = LoanDetailsModule;
exports.LoanDetailsModule = LoanDetailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [loan_details_controller_1.LoanDetailsController],
        providers: [loan_details_service_1.LoanDetailsService, local_storage_service_1.LocalStorageService],
    })
], LoanDetailsModule);
//# sourceMappingURL=loan-details.module.js.map