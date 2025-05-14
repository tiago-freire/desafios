import {
  Req,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
  Controller,
} from '@nestjs/common';

import { Request } from 'express';

import { AuthGuard } from '@/modules/auth/auth.guard';
import { MoviesService } from '@/modules/movies/movies.service';
import { UpdateMovieDto } from '@/modules/movies/dto/update-movie.dto';
import { CreateMovieDto } from '@/modules/movies/dto/create-movie.dto';

@UseGuards(AuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto, @Req() req: Request) {
    return this.moviesService.create({
      ...createMovieDto,
      userId: req.user!.id,
    });
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('q') q: string = '',
    @Req() req: Request,
  ) {
    return this.moviesService.findAll(
      {
        page: parseInt(page),
        limit: parseInt(limit),
        query: q,
      },
      req.user!.id,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    return this.moviesService.findOne(+id, req.user!.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
