import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Voluntario {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
