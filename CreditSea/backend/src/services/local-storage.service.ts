import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid'; // Add this import at the top

@Injectable()
export class LocalStorageService {
  private readonly dataDir = path.join(process.cwd(), 'data');
  private readonly dataFile = path.join(this.dataDir, 'storage.json');

  constructor() {
    // Create data directory if it doesn't exist
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
    // Create storage file if it doesn't exist
    if (!fs.existsSync(this.dataFile)) {
      fs.writeFileSync(this.dataFile, JSON.stringify({}));
    }
  }

  private readData(): any {
    const data = fs.readFileSync(this.dataFile, 'utf8');
    return JSON.parse(data);
  }

  private writeData(data: any): void {
    try {
      console.log('Writing data to storage:', JSON.stringify(data, null, 2));
      fs.writeFileSync(this.dataFile, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing to storage:', error);
      throw error;
    }
  }

  async create(collection: string, data: any): Promise<any> {
    const storage = this.readData();
    if (!storage[collection]) {
      storage[collection] = [];
    }
    const newItem = { id: uuidv4(), ...data }; // Use UUID instead of timestamp
    storage[collection].push(newItem);
    this.writeData(storage);
    return newItem;
  }

  async findAll(collection: string): Promise<any[]> {
    const storage = this.readData();
    return storage[collection] || [];
  }

  async findOne(collection: string, id: string): Promise<any> {
    const storage = this.readData();
    const items = storage[collection] || [];
    return items.find(item => item.id === id);
  }

  async update(collection: string, id: string, data: any): Promise<any> {
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

  async delete(collection: string, id: string): Promise<boolean> {
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

  async verifyEntry(collection: string, id: string): Promise<any> {
    const storage = this.readData();
    const items = storage[collection] || [];
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
      return null;
    }
    // Update both status and loanStatus to 'verified'
    items[index].status = 'verified';
    items[index].loanStatus = 'verified';
    storage[collection] = items;
    this.writeData(storage);
    return items[index];
  }

  async rejectEntry(collection: string, id: string): Promise<any> {
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

      // Update the item instead of removing it
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
    } catch (error) {
      console.error('Error in rejectEntry:', error);
      throw error;
    }
  }

  async acceptEntry(collection: string, id: string): Promise<any> {
    try {
      console.log(`Attempting to accept entry in ${collection} with ID: ${id}`);
      const storage = this.readData();
      const items = storage[collection] || [];
      
      const index = items.findIndex(item => item.id === id);
      
      if (index === -1) {
        console.log('Item not found with ID:', id);
        return null;
      }

      // Update the item with accepted status
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
    } catch (error) {
      console.error('Error in acceptEntry:', error);
      throw error;
    }
  }
}