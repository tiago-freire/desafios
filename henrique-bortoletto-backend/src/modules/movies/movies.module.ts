import { Module } from '@nestjs/common';

import { MoviesService } from '@/modules/movies/movies.service';
import { MoviesController } from '@/modules/movies/movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
