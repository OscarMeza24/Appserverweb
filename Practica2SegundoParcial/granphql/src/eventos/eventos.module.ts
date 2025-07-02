import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosResolver } from './eventos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';

@Module({
  providers: [EventosResolver, EventosService],
  imports: [TypeOrmModule.forFeature([Evento])],
})
export class EventosModule {}
