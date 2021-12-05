import { CreateScheduleInput } from './create-schedule.input';
import { InputType, Field, Int, PartialType,ID } from '@nestjs/graphql';

@InputType()
export class UpdateScheduleInput extends PartialType(CreateScheduleInput) {
  @Field(() => ID)
  id?: string;
}
