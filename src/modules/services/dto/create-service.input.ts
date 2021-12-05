import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  

  description: string;
  prevision_date: Date;
}

