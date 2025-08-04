import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@WebSocketGateway()
export class ProductosGateway {
  constructor(private readonly productosService: ProductosService) {}

  @SubscribeMessage('createProducto')
  create(@MessageBody() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @SubscribeMessage('findAllProductos')
  findAll() {
    return this.productosService.findAll();
  }

  @SubscribeMessage('findOneProducto')
  findOne(@MessageBody() id: number) {
    return this.productosService.findOne(id);
  }

  @SubscribeMessage('updateProducto')
  update(@MessageBody() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(updateProductoDto.id, updateProductoDto);
  }

  @SubscribeMessage('removeProducto')
  remove(@MessageBody() id: number) {
    return this.productosService.remove(id);
  }
}
