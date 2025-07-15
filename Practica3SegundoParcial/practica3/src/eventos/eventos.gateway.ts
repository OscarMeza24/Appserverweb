/* eslint-disable prettier/prettier */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { EventosService } from "./eventos.service";
import { CreateEventoDto } from "./dto/create-evento.dto";
import { UpdateEventoDto } from "./dto/update-evento.dto";
import { Socket, Server } from "socket.io";

@WebSocketGateway({ cors: true })
export class EventosGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  wss: Server;

  constructor(private readonly eventosService: EventosService) {}

  handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;
    console.log("Token = ", token);
  }
  handleDisconnect(client: any) {
    console.log("Client disconnected");
  }

  @SubscribeMessage("createEvento")
  create(@MessageBody() createEventoDto: CreateEventoDto) {
    const insertedEvento = this.eventosService.create(createEventoDto);
    this.wss.emit("eventoCreated", this.findAll());
    return insertedEvento;
  }

  @SubscribeMessage("findAllEventos")
  findAll() {
    return this.eventosService.findAll();
  }

  @SubscribeMessage("findOneEvento")
  findOne(@MessageBody() id: number) {
    return this.eventosService.findOne(id);
  }

  @SubscribeMessage("updateEvento")
  update(@MessageBody() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.update(updateEventoDto.id, updateEventoDto);
  }

  @SubscribeMessage("removeEvento")
  remove(@MessageBody() id: number) {
    return this.eventosService.remove(id);
  }
}
