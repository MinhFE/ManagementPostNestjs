import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/auth/dto/auth.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerBody: CreateUserDto) {
    return this.authService.register(registerBody);
  }
}
