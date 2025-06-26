import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { VoluntariosModule } from './voluntarios/voluntarios.module';
import { EventosModule } from './eventos/eventos.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';

@Module({
imports: [
  TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  }),
  VoluntariosModule,
  EventosModule,
  AsignacionesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}