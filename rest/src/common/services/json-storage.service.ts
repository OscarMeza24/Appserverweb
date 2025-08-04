import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class JsonStorageService<T extends { id?: string | number, createdAt?: Date, updatedAt?: Date, deletedAt?: Date }> {
  private readonly dataDir = path.join(process.cwd(), 'data');
  private filePath: string;

  constructor(private readonly entityName: string) {
    this.filePath = path.join(this.dataDir, `${this.entityName}.json`);
    this.ensureDataDirectoryExists();
    this.initializeFile();
  }

  private ensureDataDirectoryExists() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private initializeFile() {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([], null, 2));
    }
  }

  private readFile(): T[] {
    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    return JSON.parse(fileContent);
  }

  private writeFile(data: T[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  async findAll(): Promise<T[]> {
    const items = this.readFile();
    return items.filter(item => !item.deletedAt);
  }

  async findOne(id: string | number): Promise<T | undefined> {
    const items = await this.findAll();
    return items.find(item => item.id === id || item.id === +id);
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const items = await this.findAll();
    const newItem = { 
      ...item, 
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null
    } as T;
    
    items.push(newItem);
    this.writeFile(items);
    return newItem;
  }

  async update(id: string | number, updateData: Partial<T>): Promise<T | undefined> {
    const items = await this.findAll();
    const index = items.findIndex(item => item.id === id || item.id === +id);
    
    if (index === -1) return undefined;
    
    const updatedItem = { 
      ...items[index], 
      ...updateData, 
      id: items[index].id,
      updatedAt: new Date()
    } as T;
    
    items[index] = updatedItem;
    this.writeFile(items);
    return updatedItem;
  }

  async remove(id: string | number): Promise<boolean> {
    const items = await this.findAll();
    const index = items.findIndex(item => item.id === id || item.id === +id);

    if (index === -1) return false;

    items[index].deletedAt = new Date();
    this.writeFile(items);
    return true;
  }
}
