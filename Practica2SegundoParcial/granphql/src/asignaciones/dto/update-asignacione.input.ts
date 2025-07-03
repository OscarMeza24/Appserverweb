import { CreateAsignacioneInput } from './create-asignacione.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateAsignacioneInput extends PartialType(CreateAsignacioneInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
