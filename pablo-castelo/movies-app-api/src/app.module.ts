import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './modules/movies/movies.module';

@Module({
  imports: [UsersModule, AuthModule, PrismaModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
