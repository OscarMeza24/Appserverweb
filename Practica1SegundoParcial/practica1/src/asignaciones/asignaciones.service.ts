import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAsignacioneDto } from './dto/create-asignacione.dto';
import { UpdateAsignacioneDto } from './dto/update-asignacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asignacione } from './entities/asignacione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsignacionesService {
  constructor(
    @InjectRepository(Asignacione)
    private asignacioneRepository: Repository<Asignacione>,
  ) {}
  create(createAsignacioneDto: CreateAsignacioneDto) {
    const asignacione = this.asignacioneRepository.create(createAsignacioneDto);
    return this.asignacioneRepository.save(asignacione);
  }

  findAll() {
    return this.asignacioneRepository.find();
  }

  async findOne(id: number): Promise<Asignacione> {
    const asignacione = await this.asignacioneRepository.findOneBy({ id });
    if (!asignacione) {
      throw new NotFoundException(`Asignacione con ID ${id} no encontrado`);
    }
    return asignacione;
  }

  async update(id: number, updateAsignacioneDto: UpdateAsignacioneDto): Promise<Asignacione> {
    const asignacione = await this.findOne(id);   
    await this.asignacioneRepository.update(id, updateAsignacioneDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const asignacione = await this.findOne(id); 
    await this.asignacioneRepository.delete(id);
    return { message: 'Asignacione eliminado correctamente' };
  }
}
