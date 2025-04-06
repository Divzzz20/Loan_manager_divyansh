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
exports.LoanDetailsService = void 0;
const common_1 = require("@nestjs/common");
const local_storage_service_1 = require("../services/local-storage.service");
let LoanDetailsService = class LoanDetailsService {
    constructor(storageService) {
        this.storageService = storageService;
        this.collection = 'loanDetails';
    }
    async create(createLoanDetailDto) {
        return this.storageService.create(this.collection, createLoanDetailDto);
    }
    async findAll() {
        return this.storageService.findAll(this.collection);
    }
    async findOne(id) {
        return this.storageService.findOne(this.collection, id);
    }
    async update(id, updateLoanDetailDto) {
        return this.storageService.update(this.collection, id, updateLoanDetailDto);
    }
    async remove(id) {
        return this.storageService.delete(this.collection, id);
    }
    async verifyEntry(id) {
        return this.storageService.verifyEntry(this.collection, id);
    }
    async rejectEntry(id) {
        return this.storageService.rejectEntry(this.collection, id);
    }
    async acceptEntry(id) {
        return this.storageService.acceptEntry(this.collection, id);
    }
};
exports.LoanDetailsService = LoanDetailsService;
exports.LoanDetailsService = LoanDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService])
], LoanDetailsService);
//# sourceMappingURL=loan-details.service.js.map