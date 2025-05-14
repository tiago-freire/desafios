import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';

import bcrypt from 'bcrypt';

import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { UpdateUserDto } from '@/modules/users/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, 10),
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto, userId: number) {
    if (id !== userId) throw new ForbiddenException('Invalid request');

    const existingUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (updateUserDto.email && updateUserDto.email !== existingUser.email) {
      const userWithEmail = await this.prismaService.user.findUnique({
        where: { email: updateUserDto.email },
      });

      if (userWithEmail) {
        throw new BadRequestException('Invalid request');
      }
    }

    if (updateUserDto.password) {
      if (!updateUserDto.currentPassword) {
        throw new BadRequestException('Invalid request');
      }

      const isPasswordValid = await bcrypt.compare(
        updateUserDto.currentPassword,
        existingUser.password,
      );

      if (!isPasswordValid) {
        throw new BadRequestException('Invalid credentials');
      }

      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    delete updateUserDto.currentPassword;

    await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number, userId: number) {
    if (id !== userId) throw new ForbiddenException('Invalid request');

    await this.prismaService.user.delete({
      where: { id },
    });
  }
}
