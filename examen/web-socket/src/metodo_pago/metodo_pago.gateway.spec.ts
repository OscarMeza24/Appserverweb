import { Test, TestingModule } from '@nestjs/testing';
import { MetodoPagoGateway } from './metodo_pago.gateway';
import { MetodoPagoService } from './metodo_pago.service';

describe('MetodoPagoGateway', () => {
  let gateway: MetodoPagoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodoPagoGateway, MetodoPagoService],
    }).compile();

    gateway = module.get<MetodoPagoGateway>(MetodoPagoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
