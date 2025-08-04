import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosController } from './envios.controller';
import { JsonStorageService } from '../common/services/json-storage.service';

@Module({
  controllers: [EnviosController],
  providers: [EnviosService, JsonStorageService],
  exports: [EnviosService],
})
export class EnviosModule {}
