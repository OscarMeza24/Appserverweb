import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoluntarioInput } from './dto/create-voluntario.input';
import { UpdateVoluntarioInput } from './dto/update-voluntario.input';
import { Voluntario } from './entities/voluntario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class VoluntariosService {

  constructor(
    @InjectRepository(Voluntario)
    private voluntarioRepository: Repository<Voluntario>,
  ) {}  

  create(createVoluntarioDto: CreateVoluntarioInput) {
    const voluntario = this.voluntarioRepository.create(createVoluntarioDto);
    return this.voluntarioRepository.save(voluntario);
  }

  findAll() {
    return this.voluntarioRepository.find();
  }

  async findOne(id: number): Promise<Voluntario> {
    const voluntario = await this.voluntarioRepository.findOneBy({ id });
    if (!voluntario) {
      throw new NotFoundException(`Voluntario con ID ${id} no encontrado`);
    }
    return voluntario;
  }

  async update(id: number, updateVoluntarioDto: UpdateVoluntarioInput): Promise<Voluntario> {
    await this.findOne(id);   
    await this.voluntarioRepository.update(id, updateVoluntarioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const voluntario = await this.findOne(id); 
    await this.voluntarioRepository.delete(id);
    return { message: 'Voluntario eliminado correctamente' };
  }
}
