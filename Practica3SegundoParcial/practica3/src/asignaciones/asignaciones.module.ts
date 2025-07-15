/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AsignacionesService } from "./asignaciones.service";
import { AsignacionesGateway } from "./asignaciones.gateway";

@Module({
  providers: [AsignacionesGateway, AsignacionesService],
})
export class AsignacionesModule {}
