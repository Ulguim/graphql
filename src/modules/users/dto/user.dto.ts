import { FilterableField, FilterableOffsetConnection, FilterableRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
//import { ScheduleDTO } from 'src/modules/schedules/dto/schedule.dto';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { ScheduleDTO } from 'src/modules/schedules/dto/schedule.dto';
//import { staffsDTO } from 'src/modules/staffs/dto/staffs.dto';

//import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('User')
//@FilterableOffsetConnection('Schedule',() => ScheduleDTO,{ nullable: true })
export class UserDTO extends BaseDTO { 

  @FilterableField()
  name: string;
  
  @FilterableField()
  created:Date;

  @FilterableField({nullable: true})
  cpf:number;

}
