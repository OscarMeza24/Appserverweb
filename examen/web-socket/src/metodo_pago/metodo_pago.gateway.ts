import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MetodoPagoService } from './metodo_pago.service';
import { CreateMetodoPagoDto } from './dto/create-metodo_pago.dto';
import { UpdateMetodoPagoDto } from './dto/update-metodo_pago.dto';

@WebSocketGateway()
export class MetodoPagoGateway {
  constructor(private readonly metodoPagoService: MetodoPagoService) {}

  @SubscribeMessage('createMetodoPago')
  create(@MessageBody() createMetodoPagoDto: CreateMetodoPagoDto) {
    return this.metodoPagoService.create(createMetodoPagoDto);
  }

  @SubscribeMessage('findAllMetodoPago')
  findAll() {
    return this.metodoPagoService.findAll();
  }

  @SubscribeMessage('findOneMetodoPago')
  findOne(@MessageBody() id: number) {
    return this.metodoPagoService.findOne(id);
  }

  @SubscribeMessage('updateMetodoPago')
  update(@MessageBody() updateMetodoPagoDto: UpdateMetodoPagoDto) {
    return this.metodoPagoService.update(updateMetodoPagoDto.id, updateMetodoPagoDto);
  }

  @SubscribeMessage('removeMetodoPago')
  remove(@MessageBody() id: number) {
    return this.metodoPagoService.remove(id);
  }
}
