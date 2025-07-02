import { Injectable } from '@nestjs/common';
import { CreateAsignacioneInput } from './dto/create-asignacione.input';
import { UpdateAsignacioneInput } from './dto/update-asignacione.input';

@Injectable()
export class AsignacionesService {
  create(createAsignacioneInput: CreateAsignacioneInput) {
    return 'This action adds a new asignacione';
  }

  findAll() {
    return `This action returns all asignaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asignacione`;
  }

  update(id: number, updateAsignacioneInput: UpdateAsignacioneInput) {
    return `This action updates a #${id} asignacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} asignacione`;
  }
}
