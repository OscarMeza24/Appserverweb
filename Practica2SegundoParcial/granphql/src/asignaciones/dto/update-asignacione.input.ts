import { CreateAsignacioneInput } from './create-asignacione.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAsignacioneInput extends PartialType(CreateAsignacioneInput) {
  @Field(() => Int)
  id: number;
}
