import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return this.voluntarioRepository.findOneBy({id});
  }

  update(id: number, updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.voluntarioRepository.update(id, updateVoluntarioDto).then(() => this.findOne(id));
  }

  remove(id: number) {
    return this.voluntarioRepository.delete(id).then(() => ({message: 'Voluntario eliminado correctamente'}));
  }
}
