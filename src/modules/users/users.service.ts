import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends TypeOrmQueryService<User>{
  constructor(
    @InjectRepository(User)
    public userepository: Repository<User>,
  ) {
    super(userepository, { useSoftDelete: true });
  }

}
