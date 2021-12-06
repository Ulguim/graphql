import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Schedule } from 'src/modules/Schedules/entities/Schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User extends BaseEntity {

  @Column()
  name: string;

  @Column()
  created: Date;

  @Column({nullable: true})
  cpf: number;
  schedules: any;

  //@OneToMany(() => Schedule, (schedule) => schedule.user)
  //schedule: Schedule[];



}
