import { Module } from '@nestjs/common';
import { MetodosPagosService } from './metodos_pagos.service';
import { MetodosPagosResolver } from './metodos_pagos.resolver';

@Module({
  providers: [MetodosPagosResolver, MetodosPagosService],
})
export class MetodosPagosModule {}
