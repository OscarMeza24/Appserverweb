import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { JsonStorageService } from '../common/services/json-storage.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService, JsonStorageService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
