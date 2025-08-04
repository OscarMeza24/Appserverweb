import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { JsonStorageService } from '../common/services/json-storage.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService, JsonStorageService],
  exports: [ProductosService],
})
export class ProductosModule {}
