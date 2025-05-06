import {
  Body,
  Controller,
  Post,
  Patch,
  Param,
  Delete,
  Get,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() data: CreateMovieDto) {
    const formattedReleaseDate = new Date(data.releaseDate).toISOString();
    return await this.moviesService.create({
      ...data,
      releaseDate: formattedReleaseDate,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateMovieDto) {
    return await this.moviesService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.moviesService.remove(id);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.moviesService.findById(id);
  }

  @Get()
  async findAll() {
    return await this.moviesService.findAll();
  }
}
