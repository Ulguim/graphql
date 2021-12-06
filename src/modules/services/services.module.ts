import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';

import { ServiceDTO } from './dto/service.dto';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import {Service} from './entities/service.entity'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { Schedule } from '../Schedules/entities/Schedule.entity';
@Module({ 

  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Service,Schedule])],
      resolvers: [
        {
          DTOClass: ServiceDTO,
          EntityClass: Service,
          CreateDTOClass: CreateServiceInput,
          UpdateDTOClass: UpdateServiceInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})

export class ServicesModule { }
