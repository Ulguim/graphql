import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateScheduleInput {
  @Field()
  description: string;

  @Field()
  status: number;

 
}

