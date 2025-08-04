import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductoInput } from './dto/create-producto.input';
import { UpdateProductoInput } from './dto/update-producto.input';
import { Producto } from './entities/producto.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductosService implements OnModuleInit {
  private productos: Producto[] = [];
  private currentId = 1;
  private readonly dataFilePath = path.join(
    __dirname,
    'data',
    'productos.data.json',
  );

  onModuleInit() {
    this.loadData();
  }

  private ensureDataDirectoryExists(): void {
    const dirPath = path.dirname(this.dataFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  private loadData(): void {
    try {
      this.ensureDataDirectoryExists();
      if (!fs.existsSync(this.dataFilePath)) {
        // Si el archivo no existe, inicializamos con un array vacío
        this.productos = [];
        this.currentId = 1;
        // Creamos el archivo con un array vacío
        this.saveData();
        return;
      }

      const data = fs.readFileSync(this.dataFilePath, 'utf8');
      const parsedData = JSON.parse(data) as unknown[];

      // Validar que los datos sean un array de Producto
      if (Array.isArray(parsedData)) {
        this.productos = parsedData.filter(
          (item): item is Producto =>
            typeof item === 'object' &&
            item !== null &&
            'id' in item &&
            typeof item.id === 'number',
        );
      } else {
        this.productos = [];
      }

      this.currentId =
        this.productos.length > 0
          ? Math.max(...this.productos.map((p: Producto) => p.id)) + 1
          : 1;
    } catch (error: unknown) {
      console.error('Error al cargar los productos:', error);
      // Si hay un error al leer el archivo, se inicia con un array vacío
      this.productos = [];
      this.currentId = 1;
    }
  }

  private saveData(): void {
    fs.writeFileSync(
      this.dataFilePath,
      JSON.stringify(this.productos, null, 2),
      'utf8',
    );
  }

  create(createProductoInput: CreateProductoInput): Producto {
    const nuevoProducto: Producto = {
      id: this.currentId++,
      ...createProductoInput,
    };
    this.productos.push(nuevoProducto);
    this.saveData();
    return { ...nuevoProducto };
  }

  findAll(): Producto[] {
    return [...this.productos];
  }

  findOne(id: number): Producto {
    const producto = this.productos.find((p) => p.id === id);
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return { ...producto };
  }
  update(id: number, updateProductoInput: UpdateProductoInput): Producto {
    const index = this.productos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    const productoActualizado = {
      ...this.productos[index],
      ...updateProductoInput,
      updatedAt: new Date(),
    };

    this.productos[index] = productoActualizado;
    this.saveData();
    return { ...productoActualizado };
  }

  remove(id: number): Producto {
    const index = this.productos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    const productoEliminado = { ...this.productos[index] };
    this.productos.splice(index, 1);
    this.saveData();
    return productoEliminado;
  }
}
