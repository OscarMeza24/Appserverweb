import { Module } from '@nestjs/common';
import { MetodoPagoService } from './metodo_pago.service';
import { MetodoPagoGateway } from './metodo_pago.gateway';

@Module({
  providers: [MetodoPagoGateway, MetodoPagoService],
})
export class MetodoPagoModule {}
