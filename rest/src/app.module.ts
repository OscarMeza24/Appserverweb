import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { EnviosModule } from './envios/envios.module';
import { MetodoPagoModule } from './metodo_pago/metodo_pago.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { JsonStorageService } from './common/services/json-storage.service';

@Module({
  imports: [ProductosModule, EnviosModule, MetodoPagoModule, UsuariosModule],
  controllers: [],
  providers: [JsonStorageService],
})
export class AppModule {}
