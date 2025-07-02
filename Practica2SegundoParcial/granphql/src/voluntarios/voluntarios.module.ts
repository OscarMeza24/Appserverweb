import { Module } from '@nestjs/common';
import { VoluntariosService } from './voluntarios.service';
import { VoluntariosResolver } from './voluntarios.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voluntario } from './entities/voluntario.entity';

@Module({
  providers: [VoluntariosResolver, VoluntariosService],
  imports: [TypeOrmModule.forFeature([Voluntario])],
})
export class VoluntariosModule {}
