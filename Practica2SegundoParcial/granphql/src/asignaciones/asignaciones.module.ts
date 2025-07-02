import { Module } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { AsignacionesResolver } from './asignaciones.resolver';

@Module({
  providers: [AsignacionesResolver, AsignacionesService],
})
export class AsignacionesModule {}
