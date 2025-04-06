import { Injectable } from '@nestjs/common';
import { LocalStorageService } from '../services/local-storage.service';
import { CreateLoanDetailDto } from './dto/create-loan-detail.dto';
import { UpdateLoanDetailDto } from './dto/update-loan-detail.dto';

@Injectable()
export class LoanDetailsService {
  private readonly collection = 'loanDetails';

  constructor(private readonly storageService: LocalStorageService) {}

  async create(createLoanDetailDto: CreateLoanDetailDto) {
    return this.storageService.create(this.collection, createLoanDetailDto);
  }

  async findAll() {
    return this.storageService.findAll(this.collection);
  }

  async findOne(id: string) {
    return this.storageService.findOne(this.collection, id);
  }

  async update(id: string, updateLoanDetailDto: UpdateLoanDetailDto) {
    return this.storageService.update(this.collection, id, updateLoanDetailDto);
  }

  async remove(id: string): Promise<boolean> {
    return this.storageService.delete(this.collection, id);
  }

  async verifyEntry(id: string) {
    return this.storageService.verifyEntry(this.collection, id);
  }

  async rejectEntry(id: string) {
    return this.storageService.rejectEntry(this.collection, id);
  }

  async acceptEntry(id: string) {
    return this.storageService.acceptEntry(this.collection, id);
  }
}
