import { CreateMetodosPagoInput } from './create-metodos_pago.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMetodosPagoInput extends PartialType(
  CreateMetodosPagoInput,
) {
  @Field(() => Int)
  id: number;
}
