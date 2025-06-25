import { Test, TestingModule } from '@nestjs/testing';
import { VoluntariosResolver } from './voluntarios.resolver';
import { VoluntariosService } from './voluntarios.service';

describe('VoluntariosResolver', () => {
  let resolver: VoluntariosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoluntariosResolver, VoluntariosService],
    }).compile();

    resolver = module.get<VoluntariosResolver>(VoluntariosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
