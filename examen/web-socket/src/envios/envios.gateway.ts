import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { EnviosService } from './envios.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { UpdateEnvioDto } from './dto/update-envio.dto';

@WebSocketGateway()
export class EnviosGateway {
  constructor(private readonly enviosService: EnviosService) {}

  @SubscribeMessage('createEnvio')
  create(@MessageBody() createEnvioDto: CreateEnvioDto) {
    return this.enviosService.create(createEnvioDto);
  }

  @SubscribeMessage('findAllEnvios')
  findAll() {
    return this.enviosService.findAll();
  }

  @SubscribeMessage('findOneEnvio')
  findOne(@MessageBody() id: number) {
    return this.enviosService.findOne(id);
  }

  @SubscribeMessage('updateEnvio')
  update(@MessageBody() updateEnvioDto: UpdateEnvioDto) {
    return this.enviosService.update(updateEnvioDto.id, updateEnvioDto);
  }

  @SubscribeMessage('removeEnvio')
  remove(@MessageBody() id: number) {
    return this.enviosService.remove(id);
  }
}
