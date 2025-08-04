import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosGateway } from './productos.gateway';

@Module({
  providers: [ProductosGateway, ProductosService],
})
export class ProductosModule {}
