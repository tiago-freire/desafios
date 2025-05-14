import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

import { PrismaService } from '@/prisma/prisma.service';
import { LoginDto } from '@/modules/auth/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new Error('Invalid Credentials');
    }

    const isPasswordValid = bcrypt.compareSync(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new Error('Invalid Credentials');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      name: user.name,
      email: user.email,
    });

    return {
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      access_token: token,
    };
  }
}
