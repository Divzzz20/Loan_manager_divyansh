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
exports.LocalStorageService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const uuid_1 = require("uuid");
let LocalStorageService = class LocalStorageService {
    constructor() {
        this.dataDir = path.join(process.cwd(), 'data');
        this.dataFile = path.join(this.dataDir, 'storage.json');
        if (!fs.existsSync(this.dataDir)) {
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
        if (!fs.existsSync(this.dataFile)) {
            fs.writeFileSync(this.dataFile, JSON.stringify({}));
        }
    }
    readData() {
        const data = fs.readFileSync(this.dataFile, 'utf8');
        return JSON.parse(data);
    }
    writeData(data) {
        try {
            console.log('Writing data to storage:', JSON.stringify(data, null, 2));
            fs.writeFileSync(this.dataFile, JSON.stringify(data, null, 2));
        }
        catch (error) {
            console.error('Error writing to storage:', error);
            throw error;
        }
    }
    async create(collection, data) {
        const storage = this.readData();
        if (!storage[collection]) {
            storage[collection] = [];
        }
        const newItem = { id: (0, uuid_1.v4)(), ...data };
        storage[collection].push(newItem);
        this.writeData(storage);
        return newItem;
    }
    async findAll(collection) {
        const storage = this.readData();
        return storage[collection] || [];
    }
    async findOne(collection, id) {
        const storage = this.readData();
        const items = storage[collection] || [];
        return items.find(item => item.id === id);
    }
    async update(collection, id, data) {
        const storage = this.readData();
        const items = storage[collection] || [];
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
            return null;
        }
        items[index] = { ...items[index], ...data };
        storage[collection] = items;
        this.writeData(storage);
        return items[index];
    }
    async delete(collection, id) {
        const storage = this.readData();
        const items = storage[collection] || [];
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        }
        items.splice(index, 1);
        storage[collection] = items;
        this.writeData(storage);
        return true;
    }
    async verifyEntry(collection, id) {
        const storage = this.readData();
        const items = storage[collection] || [];
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
            return null;
        }
        items[index].status = 'verified';
        items[index].loanStatus = 'verified';
        storage[collection] = items;
        this.writeData(storage);
        return items[index];
    }
    async rejectEntry(collection, id) {
        try {
            console.log(`Attempting to reject entry in ${collection} with ID: ${id}`);
            const storage = this.readData();
            console.log('Current storage content:', JSON.stringify(storage[collection], null, 2));
            const items = storage[collection] || [];
            const index = items.findIndex(item => {
                console.log(`Comparing item ID: ${item.id} with requested ID: ${id}`);
                return item.id === id;
            });
            if (index === -1) {
                console.log('Item not found with ID:', id);
                return null;
            }
            items[index] = {
                ...items[index],
                status: 'rejected',
                loanStatus: 'rejected',
                rejectedAt: new Date().toISOString()
            };
            storage[collection] = items;
            this.writeData(storage);
            console.log('Storage updated successfully for ID:', id);
            return items[index];
        }
        catch (error) {
            console.error('Error in rejectEntry:', error);
            throw error;
        }
    }
    async acceptEntry(collection, id) {
        try {
            console.log(`Attempting to accept entry in ${collection} with ID: ${id}`);
            const storage = this.readData();
            const items = storage[collection] || [];
            const index = items.findIndex(item => item.id === id);
            if (index === -1) {
                console.log('Item not found with ID:', id);
                return null;
            }
            items[index] = {
                ...items[index],
                status: 'accepted',
                loanStatus: 'accepted',
                acceptedAt: new Date().toISOString()
            };
            storage[collection] = items;
            this.writeData(storage);
            console.log('Storage updated successfully for ID:', id);
            return items[index];
        }
        catch (error) {
            console.error('Error in acceptEntry:', error);
            throw error;
        }
    }
};
exports.LocalStorageService = LocalStorageService;
exports.LocalStorageService = LocalStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LocalStorageService);
//# sourceMappingURL=local-storage.service.js.map