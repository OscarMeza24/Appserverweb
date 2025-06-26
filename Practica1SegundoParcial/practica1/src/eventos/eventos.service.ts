import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  create(createEventoDto: CreateEventoDto) {
    const evento = this.eventoRepository.create(createEventoDto);
    return this.eventoRepository.save(evento);
  }

  findAll() {
    return this.eventoRepository.find();
  }

  async findOne(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOneBy({ id });
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return evento;
  }

  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    await this.findOne(id);   
    await this.eventoRepository.update(id, updateEventoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const evento = await this.findOne(id); 
    await this.eventoRepository.delete(id);
    return { message: 'Evento eliminado correctamente' };
  }
}
