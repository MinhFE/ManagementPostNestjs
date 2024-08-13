import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from 'src/auth/dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/users.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  register(registerBody: CreateUserDto) {
    return this.userService.createUser(registerBody);
  }

  async login(userBody: LoginUserDto): Promise<{ access_token: string }> {
    const user = await this.userService.findUserByEmailOrId(userBody.email);

    if (!bcrypt.compareSync(userBody.password, user.password)) {
      throw new UnauthorizedException();
    }

    const payloadJWT = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payloadJWT),
    };
  }
}
