/* eslint-disable prettier/prettier */
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { VoluntariosService } from "./voluntarios.service";
import { CreateVoluntarioDto } from "./dto/create-voluntario.dto";
import { UpdateVoluntarioDto } from "./dto/update-voluntario.dto";
import { Socket, Server } from "socket.io";

@WebSocketGateway({ cors: true })
export class VoluntariosGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  wss: Server;

  constructor(private readonly voluntariosService: VoluntariosService) {}
  handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authorization as string;
    console.log("Token = ", token);
  }
  handleDisconnect(client: any) {
    console.log("Client disconnected");
  }

  @SubscribeMessage("createVoluntario")
  create(@MessageBody() createVoluntarioDto: CreateVoluntarioDto) {
    const insertedVoluntario =
      this.voluntariosService.create(createVoluntarioDto);
    this.wss.emit("voluntarioCreated", this.findAll());
    return insertedVoluntario;
  }

  @SubscribeMessage("findAllVoluntarios")
  findAll() {
    return this.voluntariosService.findAll();
  }

  @SubscribeMessage("findOneVoluntario")
  findOne(@MessageBody() id: number) {
    return this.voluntariosService.findOne(id);
  }

  @SubscribeMessage("updateVoluntario")
  update(@MessageBody() updateVoluntarioDto: UpdateVoluntarioDto) {
    return this.voluntariosService.update(
      updateVoluntarioDto.id,
      updateVoluntarioDto,
    );
  }

  @SubscribeMessage("removeVoluntario")
  remove(@MessageBody() id: number) {
    return this.voluntariosService.remove(id);
  }
}
