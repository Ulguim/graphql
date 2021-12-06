import { StaffEntity } from 'src/modules/staffs/entities/staff.entity';
import { Schedule } from 'src/modules/Schedules/entities/Schedule.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User extends StaffEntity {

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
