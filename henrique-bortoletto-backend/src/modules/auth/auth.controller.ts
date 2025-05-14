import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '@/modules/auth/dto/login.dto';
import { AuthService } from '@/modules/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
