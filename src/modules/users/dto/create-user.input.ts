import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  created: Date;
  
  @Field({nullable:true})
  cpf:number;

}

