/* eslint-disable prettier/prettier */
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { AsignacionesService } from "./asignaciones.service";
import { CreateAsignacioneDto } from "./dto/create-asignacione.dto";
import { UpdateAsignacioneDto } from "./dto/update-asignacione.dto";
import { Server } from "socket.io";

@WebSocketGateway({ cors: true })
export class AsignacionesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  wss: Server;

  constructor(private readonly asignacionesService: AsignacionesService) {}
  handleConnection(client: any, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = client.handshake.headers.authorization as string;

    console.log("Token = ", token);
  }

  handleDisconnect(client: any) {
    throw new Error("Method not implemented.");
  }

  @SubscribeMessage("createAsignacione")
  create(@MessageBody() createAsignacioneDto: CreateAsignacioneDto) {
    const insetedAsignacion =
      this.asignacionesService.create(createAsignacioneDto);
    this.wss.emit("asignacionCreated", this.findAll());
    return insetedAsignacion;
  }

  @SubscribeMessage("findAllAsignaciones")
  findAll() {
    return this.asignacionesService.findAll();
  }

  @SubscribeMessage("findOneAsignacione")
  findOne(@MessageBody() id: number) {
    return this.asignacionesService.findOne(id);
  }

  @SubscribeMessage("updateAsignacione")
  update(@MessageBody() updateAsignacioneDto: UpdateAsignacioneDto) {
    return this.asignacionesService.update(
      updateAsignacioneDto.id,
      updateAsignacioneDto,
    );
  }

  @SubscribeMessage("removeAsignacione")
  remove(@MessageBody() id: number) {
    return this.asignacionesService.remove(id);
  }
}
