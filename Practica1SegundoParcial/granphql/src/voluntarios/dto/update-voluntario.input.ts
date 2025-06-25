import { CreateVoluntarioInput } from './create-voluntario.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVoluntarioInput extends PartialType(CreateVoluntarioInput) {
  @Field(() => Int)
  id: number;
}
