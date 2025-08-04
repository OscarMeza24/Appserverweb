import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MetodosPagosService } from './metodos_pagos.service';
import { MetodosPago } from './entities/metodos_pago.entity';
import { CreateMetodosPagoInput } from './dto/create-metodos_pago.input';
import { UpdateMetodosPagoInput } from './dto/update-metodos_pago.input';

@Resolver(() => MetodosPago)
export class MetodosPagosResolver {
  constructor(private readonly metodosPagosService: MetodosPagosService) {}

  @Mutation(() => MetodosPago)
  createMetodosPago(
    @Args('createMetodosPagoInput')
    createMetodosPagoInput: CreateMetodosPagoInput,
  ) {
    return this.metodosPagosService.create(createMetodosPagoInput);
  }

  @Query(() => [MetodosPago], { name: 'metodosPagos' })
  findAll() {
    return this.metodosPagosService.findAll();
  }

  @Query(() => MetodosPago, { name: 'metodosPago' })
  findOne(
    @Args('id', { type: () => Int })
    id: number,
  ) {
    return this.metodosPagosService.findOne(id);
  }

  @Mutation(() => MetodosPago)
  updateMetodosPago(
    @Args('updateMetodosPagoInput')
    updateMetodosPagoInput: UpdateMetodosPagoInput,
  ) {
    return this.metodosPagosService.update(
      updateMetodosPagoInput.id,
      updateMetodosPagoInput,
    );
  }

  @Mutation(() => MetodosPago)
  removeMetodosPago(
    @Args('id', { type: () => Int })
    id: number,
  ) {
    return this.metodosPagosService.remove(id);
  }
}
