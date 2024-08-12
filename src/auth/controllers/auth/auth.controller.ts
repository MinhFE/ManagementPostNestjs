import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { CreateUserDto } from 'src/users/dto/users.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerBody: CreateUserDto) {
    return this.authService.register(registerBody);
  }

  @Post('login')
  login(@Body() loginBody: CreateUserDto) {
    return this.authService.login(loginBody);
  }
}
