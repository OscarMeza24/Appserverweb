import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VoluntariosService } from './voluntarios.service';
import { Voluntario } from './entities/voluntario.entity';
import { CreateVoluntarioInput } from './dto/create-voluntario.input';
import { UpdateVoluntarioInput } from './dto/update-voluntario.input';

@Resolver(() => Voluntario)
export class VoluntariosResolver {
  constructor(private readonly voluntariosService: VoluntariosService) {}

  @Mutation(() => Voluntario)
  createVoluntario(@Args('createVoluntarioInput') createVoluntarioInput: CreateVoluntarioInput) {
    return this.voluntariosService.create(createVoluntarioInput);
  }

  @Query(() => [Voluntario], { name: 'voluntarios' })
  findAll() {
    return this.voluntariosService.findAll();
  }

  @Query(() => Voluntario, { name: 'voluntario' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.voluntariosService.findOne(id);
  }

  @Mutation(() => Voluntario)
  updateVoluntario(@Args('updateVoluntarioInput') updateVoluntarioInput: UpdateVoluntarioInput) {
    return this.voluntariosService.update(updateVoluntarioInput.id, updateVoluntarioInput);
  }

  @Mutation(() => Voluntario)
  removeVoluntario(@Args('id', { type: () => Int }) id: number) {
    return this.voluntariosService.remove(id);
  }
}
