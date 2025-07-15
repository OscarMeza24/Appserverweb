/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { VoluntariosService } from "./voluntarios.service";
import { VoluntariosGateway } from "./voluntarios.gateway";

@Module({
  providers: [VoluntariosGateway, VoluntariosService],
})
export class VoluntariosModule {}
