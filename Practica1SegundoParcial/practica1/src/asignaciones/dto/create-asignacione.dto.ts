import { IsNotEmpty, IsString, IsOptional, IsDateString } from "class-validator";

export class CreateAsignacioneDto {
    @IsNotEmpty()
    @IsString()
    nombre_asignacion: string;

    @IsNotEmpty()
    @IsString()
    rol: string;

    @IsNotEmpty()
    @IsDateString()
    fecha_asignacion: string;

    @IsOptional()
    estado: 'Activo' | 'Inactivo';
}
