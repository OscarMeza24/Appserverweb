import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsignacionesService } from './asignaciones.service';
import { Asignacione } from './entities/asignacione.entity';
import { CreateAsignacioneInput } from './dto/create-asignacione.input';
import { UpdateAsignacioneInput } from './dto/update-asignacione.input';

@Resolver(() => Asignacione)
export class AsignacionesResolver {
  constructor(private readonly asignacionesService: AsignacionesService) {}

  @Mutation(() => Asignacione)
  createAsignacione(@Args('createAsignacioneInput') createAsignacioneInput: CreateAsignacioneInput) {
    return this.asignacionesService.create(createAsignacioneInput);
  }

  @Query(() => [Asignacione], { name: 'asignaciones' })
  findAll() {
    return this.asignacionesService.findAll();
  }

  @Query(() => Asignacione, { name: 'asignacione' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.asignacionesService.findOne(id);
  }

  @Mutation(() => Asignacione)
  updateAsignacione(@Args('updateAsignacioneInput') updateAsignacioneInput: UpdateAsignacioneInput) {
    return this.asignacionesService.update(updateAsignacioneInput.id, updateAsignacioneInput);
  }

  @Mutation(() => Asignacione)
  removeAsignacione(@Args('id', { type: () => Int }) id: number) {
    return this.asignacionesService.remove(id);
  }
}
