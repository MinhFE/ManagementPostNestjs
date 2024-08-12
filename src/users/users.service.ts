import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userService: Repository<User>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<string> {
    userData.password = bcrypt.hashSync(userData.password, 10);
    try {
      await this.userService.insert(userData);
      return 'Create user successfully!!!';
    } catch (error) {
      throw new Error(error);
    }
  }

  async findUserByEmailOrId(
    emailOrId: number | string,
  ): Promise<User | undefined> {
    const user = await this.userService.findOneBy([
      { email: typeof emailOrId === 'string' ? emailOrId : undefined },
      { id: typeof emailOrId === 'number' ? emailOrId : undefined },
    ]);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
