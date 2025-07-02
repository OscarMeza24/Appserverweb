import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAsignacioneInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
