import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from 'src/modules/services/entities/service.entity';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';
import { Context } from '@nestjs/graphql';
@Entity()
export class Schedule extends BaseEntity{

  @Column()
  description: string;

  @Column()
  status: number;

  @Column({ nullable: true })
  linkContent: string;
 

  @OneToMany(()=> Service, (services)=> services.schedule)
  services: Service[]

}
