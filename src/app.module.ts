import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppService } from './app.service';
import { Schedule } from './modules/Schedules/entities/Schedule.entity';
import { Service } from './modules/services/entities/service.entity';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,

    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true
    }),
    UsersModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
