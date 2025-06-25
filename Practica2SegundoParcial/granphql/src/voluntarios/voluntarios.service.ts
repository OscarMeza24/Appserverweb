import { Injectable } from '@nestjs/common';
import { CreateVoluntarioInput } from './dto/create-voluntario.input';
import { UpdateVoluntarioInput } from './dto/update-voluntario.input';

@Injectable()
export class VoluntariosService {
  create(createVoluntarioInput: CreateVoluntarioInput) {
    return 'This action adds a new voluntario';
  }

  findAll() {
    return `This action returns all voluntarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} voluntario`;
  }

  update(id: number, updateVoluntarioInput: UpdateVoluntarioInput) {
    return `This action updates a #${id} voluntario`;
  }

  remove(id: number) {
    return `This action removes a #${id} voluntario`;
  }
}
