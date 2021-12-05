import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ScheduleDTO } from 'src/modules/schedules/dto/schedule.dto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Service')
@FilterableRelation('Schedule', ()=> ScheduleDTO)
export class ServiceDTO extends BaseDTO{
  
  @FilterableField()
  description: string;

  @FilterableField()
  prevision_date: Date;
}
