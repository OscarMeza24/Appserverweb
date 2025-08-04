import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EnviosService } from './envios.service';
import { Envio } from './entities/envio.entity';
import { CreateEnvioInput } from './dto/create-envio.input';
import { UpdateEnvioInput } from './dto/update-envio.input';

@Resolver(() => Envio)
export class EnviosResolver {
  constructor(private readonly enviosService: EnviosService) {}

  @Mutation(() => Envio)
  createEnvio(@Args('createEnvioInput') createEnvioInput: CreateEnvioInput) {
    return this.enviosService.create(createEnvioInput);
  }

  @Query(() => [Envio], { name: 'envios' })
  findAll() {
    return this.enviosService.findAll();
  }

  @Query(() => Envio, { name: 'envio' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.enviosService.findOne(id);
  }

  @Mutation(() => Envio)
  updateEnvio(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateEnvioInput') updateEnvioInput: UpdateEnvioInput,
  ) {
    return this.enviosService.update(id, updateEnvioInput);
  }

  @Mutation(() => Envio)
  removeEnvio(@Args('id', { type: () => Int }) id: number) {
    return this.enviosService.remove(id);
  }
}
