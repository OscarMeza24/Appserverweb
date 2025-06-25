import { Test, TestingModule } from '@nestjs/testing';
import { VoluntariosController } from './voluntarios.controller';
import { VoluntariosService } from './voluntarios.service';

describe('VoluntariosController', () => {
  let controller: VoluntariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoluntariosController],
      providers: [VoluntariosService],
    }).compile();

    controller = module.get<VoluntariosController>(VoluntariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
