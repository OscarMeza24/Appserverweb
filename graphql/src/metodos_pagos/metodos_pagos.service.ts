import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMetodosPagoInput } from './dto/create-metodos_pago.input';
import { UpdateMetodosPagoInput } from './dto/update-metodos_pago.input';
import { MetodosPago } from './entities/metodos_pago.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MetodosPagosService implements OnModuleInit {
  private metodosPago: MetodosPago[] = [];
  private currentId = 1;
  private readonly dataFilePath = path.join(
    __dirname,
    'data',
    'metodos_pago.data.json',
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
        this.metodosPago = [];
        this.currentId = 1;
        // Creamos el archivo con un array vacío
        this.saveData();
        return;
      }

      const data = fs.readFileSync(this.dataFilePath, 'utf8');
      const parsedData = JSON.parse(data) as unknown[];

      // Validar que los datos sean un array de MetodosPago
      if (Array.isArray(parsedData)) {
        this.metodosPago = parsedData.filter(
          (item): item is MetodosPago =>
            typeof item === 'object' &&
            item !== null &&
            'id' in item &&
            typeof item.id === 'number',
        );
      } else {
        this.metodosPago = [];
      }

      this.currentId =
        this.metodosPago.length > 0
          ? Math.max(...this.metodosPago.map((p) => p.id)) + 1
          : 1;
    } catch (error: unknown) {
      console.error('Error al cargar los métodos de pago:', error);
      this.metodosPago = [];
      this.currentId = 1;
    }
  }

  private saveData(): void {
    fs.writeFileSync(
      this.dataFilePath,
      JSON.stringify(this.metodosPago, null, 2),
      'utf8',
    );
  }

  create(createMetodosPagoInput: CreateMetodosPagoInput): MetodosPago {
    const nuevoMetodoPago: MetodosPago = {
      id: this.currentId++,
      ...createMetodosPagoInput,
    };
    this.metodosPago.push(nuevoMetodoPago);
    this.saveData();
    return { ...nuevoMetodoPago };
  }

  findAll(): MetodosPago[] {
    return [...this.metodosPago];
  }

  findOne(id: number): MetodosPago {
    const metodoPago = this.metodosPago.find((mp) => mp.id === id);
    if (!metodoPago) {
      throw new Error(`Método de pago con ID ${id} no encontrado`);
    }
    return { ...metodoPago };
  }

  update(
    id: number,
    updateMetodosPagoInput: UpdateMetodosPagoInput,
  ): MetodosPago {
    const index = this.metodosPago.findIndex((mp) => mp.id === id);
    if (index === -1) {
      throw new Error(`Método de pago con ID ${id} no encontrado`);
    }

    const metodoPagoActualizado = {
      ...this.metodosPago[index],
      ...updateMetodosPagoInput,
    };

    this.metodosPago[index] = metodoPagoActualizado;
    this.saveData();
    return { ...metodoPagoActualizado };
  }

  remove(id: number): MetodosPago {
    const index = this.metodosPago.findIndex((mp) => mp.id === id);
    if (index === -1) {
      throw new Error(`Método de pago con ID ${id} no encontrado`);
    }
    const metodoPagoEliminado = { ...this.metodosPago[index] };
    this.metodosPago.splice(index, 1);
    this.saveData();
    return metodoPagoEliminado;
  }
}
