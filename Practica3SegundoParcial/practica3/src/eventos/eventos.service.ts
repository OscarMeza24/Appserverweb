/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateEventoDto } from "./dto/create-evento.dto";
import { UpdateEventoDto } from "./dto/update-evento.dto";

const eventos = [
  {
    id: 1,
    nombre_evento: "Evento 1",
    fecha_evento: "2023-10-01",
    lugar_evento: "Lugar 1",
    estado: "Activo",
  },
  {
    id: 2,
    nombre_evento: "Evento 2",
    fecha_evento: "2023-10-02",
    lugar_evento: "Lugar 2",
    estado: "Inactivo",
  },
];

@Injectable()
export class EventosService {
  create(createEventoDto: CreateEventoDto) {
    eventos.push(createEventoDto);
    return createEventoDto;
  }

  findAll() {
    return eventos;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoDto: UpdateEventoDto) {
    return updateEventoDto;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
