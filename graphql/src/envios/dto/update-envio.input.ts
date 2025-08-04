import { CreateEnvioInput } from './create-envio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEnvioInput extends PartialType(CreateEnvioInput) {
  @Field(() => Int)
  id: number;
}
