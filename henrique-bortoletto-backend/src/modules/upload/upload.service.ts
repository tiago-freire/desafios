import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private readonly s3Client: S3Client;
  private readonly bucket: string;
  private readonly region: string;

  constructor() {
    this.bucket = process.env.AWS_BUCKET_NAME!;
    this.region = process.env.AWS_REGION!;

    this.s3Client = new S3Client({
      region: process.env.AWS_REGION!,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });
  }

  async create(files: Express.Multer.File[]) {
    if (!files || files.length === 0) return;

    const promises = files.map(async (file) => {
      const filename = `${uuidv4()}-${file.originalname}`;

      const uploadParams = {
        Bucket: this.bucket,
        Key: filename,
        Body: file.buffer,
        ContentType: file.mimetype,
      };

      try {
        const command = new PutObjectCommand(uploadParams);
        await this.s3Client.send(command);
        return `https://${this.bucket}.s3.${this.region}.amazonaws.com/${filename}`;
      } catch (error) {
        console.error(error);
        throw new Error('Error uploading file.');
      }
    });

    const urls = await Promise.all(promises);
    return { urls };
  }
}
