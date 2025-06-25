import { Module } from '@nestjs/common';
import { VoluntariosService } from './voluntarios.service';
import { VoluntariosResolver } from './voluntarios.resolver';

@Module({
  providers: [VoluntariosResolver, VoluntariosService],
})
export class VoluntariosModule {}
