import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/authRoutes';
import movieRoutes from './routes/movieRoutes';

dotenv.config();

interface EnvironmentVariables {
  PORT?: string;
  NODE_ENV?: 'development' | 'production' | 'test';
}

class App {
  public app: Application;
  private env: EnvironmentVariables;
  private PORT: number;

  constructor() {
    this.app = express();
    this.env = process.env as EnvironmentVariables;
    this.PORT = parseInt(this.env.PORT || '3000', 10);

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeStaticFiles();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    this.app.use('/auth', authRoutes);
    this.app.use('/movies', movieRoutes);
  }

  private initializeStaticFiles(): void {
    this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${this.PORT} em modo ${this.env.NODE_ENV || 'development'}`);
    });
  }
}

const application = new App();
application.listen();

export default application.app;