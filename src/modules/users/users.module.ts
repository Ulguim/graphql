import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Module({
  imports:[
    NestjsQueryGraphQLModule.forFeature({
           services : [UserService],
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      
      resolvers: [{
         DTOClass: UserDTO, 
         EntityClass: User,
         CreateDTOClass:CreateUserInput,
         UpdateDTOClass:UpdateUserInput,
         ServiceClass: UserService,
         enableTotalCount:true,
         pagingStrategy: PagingStrategies.OFFSET,
        }],
    }),
  ],
  providers: []
})
export class UsersModule {}
