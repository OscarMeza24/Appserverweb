/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { VoluntariosModule } from "./voluntarios/voluntarios.module";
import { EventosModule } from "./eventos/eventos.module";
import { AsignacionesModule } from "./asignaciones/asignaciones.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "app.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
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
