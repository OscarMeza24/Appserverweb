import { Test, TestingModule } from '@nestjs/testing';
import { EnviosGateway } from './envios.gateway';
import { EnviosService } from './envios.service';

describe('EnviosGateway', () => {
  let gateway: EnviosGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnviosGateway, EnviosService],
    }).compile();

    gateway = module.get<EnviosGateway>(EnviosGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
