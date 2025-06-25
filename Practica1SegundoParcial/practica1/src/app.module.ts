import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { VoluntariosModule } from './voluntarios/voluntarios.module';

@Module({
imports: [
  TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  }),
  VoluntariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}