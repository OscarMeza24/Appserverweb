import { CreateVoluntarioInput } from './create-voluntario.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class UpdateVoluntarioInput extends PartialType(CreateVoluntarioInput) {
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
