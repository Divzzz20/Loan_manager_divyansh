import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoanDetailsModule } from './loan-details/loan-details.module';
import { LocalStorageService } from './services/local-storage.service';

@Module({
  imports: [
    LoanDetailsModule
  ],
  controllers: [AppController],
  providers: [AppService, LocalStorageService],
})
export class AppModule {}
