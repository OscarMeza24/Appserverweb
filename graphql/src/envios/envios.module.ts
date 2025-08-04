import { Module } from '@nestjs/common';
import { EnviosService } from './envios.service';
import { EnviosResolver } from './envios.resolver';

@Module({
  providers: [EnviosResolver, EnviosService],
  exports: [EnviosService],
})
export class EnviosModule {}
