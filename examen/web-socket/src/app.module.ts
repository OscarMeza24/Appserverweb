import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetodoPagoModule } from './metodo_pago/metodo_pago.module';
import { ProductosModule } from './productos/productos.module';
import { EnviosModule } from './envios/envios.module';

@Module({
  imports: [MetodoPagoModule, ProductosModule, EnviosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
