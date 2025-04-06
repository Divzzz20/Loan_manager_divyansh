import { Module } from '@nestjs/common';
import { LoanDetailsController } from './loan-details.controller';
import { LoanDetailsService } from './loan-details.service';
import { LocalStorageService } from '../services/local-storage.service';

@Module({
  controllers: [LoanDetailsController],
  providers: [LoanDetailsService, LocalStorageService],
})
export class LoanDetailsModule {}
