import { IsNotEmpty, IsString, IsOptional, IsDateString } from "class-validator";

export class CreateEventoDto {
    @IsNotEmpty()
    @IsString()
    nombre_evento: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_evento: string;

    @IsNotEmpty()
    @IsString()
    lugar_evento: string;

    @IsOptional()
    estado: 'Activo' | 'Inactivo';
}
