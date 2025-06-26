import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVoluntarioDto } from './dto/create-voluntario.dto';
import { UpdateVoluntarioDto } from './dto/update-voluntario.dto';
import { Voluntario } from './entities/voluntario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class VoluntariosService {

  constructor(
    @InjectRepository(Voluntario)
    private voluntarioRepository: Repository<Voluntario>,
  ) {}  

  create(createVoluntarioDto: CreateVoluntarioDto) {
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

  async update(id: number, updateVoluntarioDto: UpdateVoluntarioDto): Promise<Voluntario> {
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
