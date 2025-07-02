import { IsNotEmpty, IsString, IsOptional, IsDateString } from "class-validator";
import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEventoInput {
    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    nombre_evento: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsDateString()
    fecha_evento: string;

    @Field(() => String)
    @IsNotEmpty()
    @IsString()
    lugar_evento: string;

    @Field(() => String)
    @IsOptional()
    estado: 'Activo' | 'Inactivo';
}
