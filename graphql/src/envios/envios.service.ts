import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateEnvioInput } from './dto/create-envio.input';
import { UpdateEnvioInput } from './dto/update-envio.input';
import { Envio } from './entities/envio.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EnviosService implements OnModuleInit {
  private readonly dataPath = path.join(__dirname, 'data', 'envios.data.json');
  private envios: Envio[] = [];
  private currentId = 1;

  onModuleInit() {
    this.loadEnviosFromFile();
  }

  private ensureDataDirectoryExists(): void {
    const dirPath = path.dirname(this.dataPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  private loadEnviosFromFile(): void {
    try {
      this.ensureDataDirectoryExists();
      if (!fs.existsSync(this.dataPath)) {
        // Si el archivo no existe, inicializamos con un array vacío
        this.envios = [];
        this.currentId = 1;
        // Creamos el archivo con un array vacío
        this.saveEnviosToFile();
        return;
      }

      const data = fs.readFileSync(this.dataPath, 'utf8');
      const parsedData = JSON.parse(data) as unknown[];

      // Validar que los datos sean un array de Envio
      if (Array.isArray(parsedData)) {
        this.envios = parsedData.filter(
          (item): item is Envio =>
            typeof item === 'object' &&
            item !== null &&
            'id' in item &&
            typeof item.id === 'number' &&
            'Direccion' in item &&
            'CodigoPostal' in item &&
            'Cuidad' in item &&
            'Pais' in item,
        );
      } else {
        this.envios = [];
      }

      this.currentId =
        this.envios.length > 0
          ? Math.max(...this.envios.map((envio) => envio.id)) + 1
          : 1;
    } catch (error: unknown) {
      console.error('Error al cargar los envíos desde el archivo:', error);
      this.envios = [];
      this.currentId = 1;
    }
  }

  private saveEnviosToFile(): void {
    try {
      const dirPath = path.dirname(this.dataPath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      fs.writeFileSync(
        this.dataPath,
        JSON.stringify(this.envios, null, 2),
        'utf8',
      );
    } catch (error: unknown) {
      console.error('Error al guardar los envíos en el archivo:', error);
      throw new Error('No se pudo guardar los datos de envío');
    }
  }

  create(createEnvioInput: CreateEnvioInput): Envio {
    const nuevoEnvio: Envio = {
      id: this.currentId++,
      ...createEnvioInput,
    };
    this.envios.push(nuevoEnvio);
    this.saveEnviosToFile();
    return { ...nuevoEnvio };
  }

  findAll(): Envio[] {
    return [...this.envios];
  }

  findOne(id: number): Envio {
    const envio = this.envios.find((e) => e.id === id);
    if (!envio) {
      throw new Error(`Envío con ID ${id} no encontrado`);
    }
    return { ...envio };
  }

  update(id: number, updateEnvioInput: UpdateEnvioInput): Envio {
    const index = this.envios.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error(`Envío con ID ${id} no encontrado`);
    }

    const envioActualizado = {
      ...this.envios[index],
      ...updateEnvioInput,
    };

    this.envios[index] = envioActualizado;
    this.saveEnviosToFile();
    return { ...envioActualizado };
  }

  remove(id: number): Envio {
    const index = this.envios.findIndex((e) => e.id === id);
    if (index === -1) {
      throw new Error(`Envío con ID ${id} no encontrado`);
    }
    const envioEliminado = { ...this.envios[index] };
    this.envios.splice(index, 1);
    this.saveEnviosToFile();
    return envioEliminado;
  }
}
