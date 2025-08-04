import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { JsonStorageService } from '../common/services/json-storage.service';

@Injectable()
export class ProductosService {
  private storage: JsonStorageService<Producto>;

  constructor() {
    this.storage = new JsonStorageService<Producto>('productos');
  }

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    return this.storage.create(createProductoDto as any);
  }

  async findAll(): Promise<Producto[]> {
    return this.storage.findAll();
  }

  async findOne(id: string | number): Promise<Producto> {
    const producto = await this.storage.findOne(id);
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async update(id: string | number, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    await this.findOne(id);
    
    const updated = await this.storage.update(id, updateProductoDto);
    if (!updated) {
      throw new NotFoundException(`No se pudo actualizar el producto con ID ${id}`);
    }
    
    return updated;
  }

  async remove(id: string | number): Promise<void> {
    const result = await this.storage.remove(id);
    if (!result) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
  }
}
