/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { EventosService } from "./eventos.service";
import { EventosGateway } from "./eventos.gateway";

@Module({
  providers: [EventosGateway, EventosService],
})
export class EventosModule {}
