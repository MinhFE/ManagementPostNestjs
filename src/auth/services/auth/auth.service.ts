import * as bcrypt from "bcrypt"
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userService: Repository<UserEntity>,
  ) {}

  async register(userBody: CreateUserDto): Promise<void> {
    userBody.password = bcrypt.hashSync(userBody.password, 10);
    try {
      await this.userService.insert(userBody);
    } catch (error) {
      throw new Error(error);
    }
  }
}
