import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateMovieDto) {
    return await this.prisma.movie.create({ data });
  }

  async update(id: string, data: UpdateMovieDto) {
    return await this.prisma.movie.update({ where: { id }, data });
  }

  async remove(id: string) {
    return await this.prisma.movie.delete({ where: { id } });
  }

  async findAll() {
    return await this.prisma.movie.findMany();
  }

  async findById(id: string) {
    return await this.prisma.movie.findUnique({ where: { id } });
  }
}
