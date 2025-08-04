import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosGateway } from './envios.gateway';

@Module({
  providers: [EnviosGateway, EnviosService],
})
export class EnviosModule {}
