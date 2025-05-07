import AWS from 'aws-sdk';
import multer from 'multer';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

interface FileRequest extends Request {
  body: {
    imageUrl?: string;
    [key: string]: any;
  };
}

const s3 = new AWS.S3({
  accessKeyId: process.env.R2_ACCESS_KEY_ID,
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  endpoint: process.env.R2_ENDPOINT,
  signatureVersion: 'v4',
  region: 'auto',
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadToR2 = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.file) {
    console.log('Nenhum arquivo recebido');
    next();
    return;
  }

  const bucketName = process.env.R2_BUCKET_NAME;
  const publicDomain = process.env.R2_PUBLIC_DOMAIN;

  if (!bucketName || !publicDomain) {
    res.status(500).json({ 
      message: 'Configuração incompleta do R2' 
    });
    return;
  }

  const fileName = `${uuidv4()}-${req.file.originalname}`;
  
  const params: AWS.S3.PutObjectRequest = {
    Bucket: bucketName,
    Key: fileName,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: 'public-read',
  };

  try {
    console.log('Enviando para R2:', fileName);
    await s3.putObject(params).promise();
    
    (req as FileRequest).body.imageUrl = `https://${publicDomain}.r2.dev/${fileName}`;
    console.log('Imagem enviada com sucesso:', (req as FileRequest).body.imageUrl);
    
    next();
  } catch (error) {
    console.error('Erro ao subir para R2:', error);
    res.status(500).json({ 
      message: 'Erro no upload da imagem', 
      error: (error as Error).message 
    });
    return;
  }
};

export { upload, uploadToR2 };