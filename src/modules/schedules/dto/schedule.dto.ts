import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ServiceDTO } from 'src/modules/services/dto/service.dto';
import { Column, Connection, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType('Schedule')
@FilterableOffsetConnection('services', ()=> ServiceDTO)


export class ScheduleDTO extends BaseDTO{

 @FilterableField()
 description: string;
 @FilterableField()
 status: number;

}
