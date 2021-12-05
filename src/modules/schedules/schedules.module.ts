import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { SchedulesService } from './schedules.service';

import { scheduled } from 'rxjs';
import { CreateScheduleInput } from './dto/create-schedule.input';
import { UpdateScheduleInput } from './dto/update-schedule.input';
import { ScheduleDTO } from './dto/schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Module({ 

  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Schedule])],
      resolvers: [
        {
          DTOClass: ScheduleDTO,
          EntityClass: Schedule,
          CreateDTOClass: CreateScheduleInput,
          UpdateDTOClass: UpdateScheduleInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})

export class SchedulesModule { }
