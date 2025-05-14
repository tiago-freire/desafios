import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@/prisma/prisma.service';
import { CreateMovieDto } from '@/modules/movies/dto/create-movie.dto';
import { UpdateMovieDto } from '@/modules/movies/dto/update-movie.dto';

interface Options {
  page?: number;
  limit?: number;
  query?: string;
}

@Injectable()
export class MoviesService {
  constructor(private prismaService: PrismaService) {}

  create(createMovieDto: CreateMovieDto & { userId: number }) {
    return this.prismaService.movie.create({
      data: createMovieDto,
    });
  }

  async findAll(options: Options = {}, userId: number) {
    const { page = 1, limit = 10, query = '' } = options;
    const skip = (page - 1) * limit;

    const search = {
      title: {
        contains: query,
        mode: Prisma.QueryMode.insensitive,
      },
    };

    const where: Prisma.MovieWhereInput = {
      userId,
      ...(query ? search : {}),
    };

    const total = await this.prismaService.movie.count({ where });
    const movies = await this.prismaService.movie.findMany({
      where,
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        genres: true,
        thumb: true,
      },
    });

    return {
      data: movies,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  findOne(id: number, userId: number) {
    return this.prismaService.movie.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.prismaService.movie.update({
      where: { id },
      data: updateMovieDto,
    });
  }

  remove(id: number) {
    return this.prismaService.movie.delete({
      where: { id },
    });
  }
}
