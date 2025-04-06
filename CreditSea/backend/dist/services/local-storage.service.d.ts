export declare class LocalStorageService {
    private readonly dataDir;
    private readonly dataFile;
    constructor();
    private readData;
    private writeData;
    create(collection: string, data: any): Promise<any>;
    findAll(collection: string): Promise<any[]>;
    findOne(collection: string, id: string): Promise<any>;
    update(collection: string, id: string, data: any): Promise<any>;
    delete(collection: string, id: string): Promise<boolean>;
    verifyEntry(collection: string, id: string): Promise<any>;
    rejectEntry(collection: string, id: string): Promise<any>;
    acceptEntry(collection: string, id: string): Promise<any>;
}
