import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ id });
  }

  update(id: number, user: User): Promise<UpdateResult> {
    return this.userRepository.update({ id }, user);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({ id });
  }
}
