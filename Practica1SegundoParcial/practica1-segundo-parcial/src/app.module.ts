import { Module } from '@nestjs/common';
import { VoluntariosModule } from './voluntarios/voluntarios.module';

@Module({
  imports: [VoluntariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
