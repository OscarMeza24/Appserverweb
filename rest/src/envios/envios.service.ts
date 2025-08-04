import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';
import { Envio } from './entities/envio.entity';
import { JsonStorageService } from '../common/services/json-storage.service';

@Injectable()
export class EnviosService {
  private storage: JsonStorageService<Envio>;

  constructor() {
    this.storage = new JsonStorageService<Envio>('envios');
  }

  async create(createEnvioDto: CreateEnvioDto): Promise<Envio> {
    return this.storage.create(createEnvioDto as any);
  }

  async findAll(): Promise<Envio[]> {
    return this.storage.findAll();
  }

  async findOne(id: string | number): Promise<Envio> {
    const envio = await this.storage.findOne(id);
    if (!envio) {
      throw new NotFoundException(`Envio con ID ${id} no encontrado`);
    }
    return envio;
  }

  async update(id: string | number, updateEnvioDto: UpdateEnvioDto): Promise<Envio> {
    await this.findOne(id);
    
    const updated = await this.storage.update(id, updateEnvioDto);
    if (!updated) {
      throw new NotFoundException(`No se pudo actualizar el envio con ID ${id}`);
    }
    
    return updated;
  }

  async remove(id: string | number): Promise<void> {
    const result = await this.storage.remove(id);
    if (!result) {
      throw new NotFoundException(`Envio con ID ${id} no encontrado`);
    }
  }
}
