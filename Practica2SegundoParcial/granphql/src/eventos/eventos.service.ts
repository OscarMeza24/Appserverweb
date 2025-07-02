import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoInput } from './dto/create-evento.input';
import { UpdateEventoInput } from './dto/update-evento.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  create(CreateEventoInput: CreateEventoInput) {
    const evento = this.eventoRepository.create(CreateEventoInput);
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

  async update(id: number, updateEventoDto: UpdateEventoInput): Promise<Evento> {
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
