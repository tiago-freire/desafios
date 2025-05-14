import {
  Post,
  UseGuards,
  Controller,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';

import { FilesInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '@/modules/auth/auth.guard';
import { UploadService } from '@/modules/upload/upload.service';

@UseGuards(AuthGuard)
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 2))
  create(@UploadedFiles() files: Express.Multer.File[]) {
    return this.uploadService.create(files);
  }
}
