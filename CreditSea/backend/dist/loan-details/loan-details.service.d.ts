import { LocalStorageService } from '../services/local-storage.service';
import { CreateLoanDetailDto } from './dto/create-loan-detail.dto';
import { UpdateLoanDetailDto } from './dto/update-loan-detail.dto';
export declare class LoanDetailsService {
    private readonly storageService;
    private readonly collection;
    constructor(storageService: LocalStorageService);
    create(createLoanDetailDto: CreateLoanDetailDto): Promise<any>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    update(id: string, updateLoanDetailDto: UpdateLoanDetailDto): Promise<any>;
    remove(id: string): Promise<boolean>;
    verifyEntry(id: string): Promise<any>;
    rejectEntry(id: string): Promise<any>;
    acceptEntry(id: string): Promise<any>;
}
