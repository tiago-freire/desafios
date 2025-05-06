import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Email ou senha incorretos');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Email ou senha incorretos');

    const { password: _, ...signInResponse } = user;

    return signInResponse;
  }

  async login(loginData: LoginDto) {
    const user = await this.validateUser(loginData.email, loginData.password);

    return {
      access_token: this.jwtService.sign({ sub: user.id,  }),
      user,
    };
  }
}
