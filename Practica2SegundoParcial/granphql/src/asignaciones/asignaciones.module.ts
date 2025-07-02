import { Module } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { AsignacionesResolver } from './asignaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacione } from './entities/asignacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacione])],
  providers: [AsignacionesResolver, AsignacionesService],
})
export class AsignacionesModule {}
