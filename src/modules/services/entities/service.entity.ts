import { scheduled } from 'rxjs';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { Schedule } from 'src/modules/schedules/entities/schedule.entity';
import { BaseEntity } from 'src/modules/bases/entities/base.entity';

@Entity()
export class Service extends BaseEntity {
 

  @Column()
  description: string;
  @Column()
  prevision_date: string;

  @ManyToOne(()=> Schedule)
  schedule: Schedule;


  
}

