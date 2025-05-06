import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUserByEmailDto } from './dto/get-user-by-email.dto';
import { GetUserByIdDto } from './dto/get-user-by-id.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: CreateUserDto) {
    return this.usersService.create(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findByEmail(@Body() data: GetUserByEmailDto) {
    return this.usersService.findByEmail(data.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findById(@Param('id') data: GetUserByIdDto) {
    return this.usersService.findByEmail(data.id);
  }
}
