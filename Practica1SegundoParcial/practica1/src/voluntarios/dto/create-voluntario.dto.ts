import { IsNotEmpty, IsOptional, MinLength, IsString, IsNumber, IsEmail } from "class-validator";

export class CreateVoluntarioDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    apellido: string;

    @IsEmail()
    correo: string;

    @IsNumber()s
    telefono: number;
   
    @IsString()
    direccion: string;
    
    @IsString()
    fecha_nacimiento: string;
    
    @IsString()
    genero: 'Masculino' | 'Femenino';
    
    @IsOptional()
    estado: string;
}
