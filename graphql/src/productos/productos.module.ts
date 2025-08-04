import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosResolver } from './productos.resolver';

@Module({
  providers: [ProductosResolver, ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
