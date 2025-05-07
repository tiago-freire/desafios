import { prisma } from '../prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}


export interface LoginCredentials {
  email: string;
  password: string;
}


export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface AuthResult {
  status: boolean;
  message: string;
  user?: UserData;
  token?: string;
}

class AuthServices {

  async register(userData: RegisterData): Promise<AuthResult> {
    const { name, email, password } = userData;
    
    if (!name || !email || !password) {
      return {
        status: false,
        message: 'Todos os campos são obrigatórios.'
      };
    }

    try {
      const existingUser = await prisma.user.findUnique({ 
        where: { email } 
      });
      
      if (existingUser) {
        return {
          status: false,
          message: 'Email já cadastrado.'
        };
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });

      const jwtSecret = process.env.JWT_SECRET;
      
      if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined');
      }
      
      const token = jwt.sign(
        { userId: user.id }, 
        jwtSecret,
        { expiresIn: '1d' }
      );

      return {
        status: true,
        message: 'Usuário registrado com sucesso.',
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email 
        },
        token
      };
    } catch (error) {
      console.error('Error in register service:', error);
      return {
        status: false,
        message: 'Erro ao registrar usuário.'
      };
    }
  }

  async login(credentials: LoginCredentials): Promise<AuthResult> {
    const { email, password } = credentials;

    try {
      const user = await prisma.user.findUnique({ 
        where: { email } 
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return {
          status: false, 
          message: 'Credenciais inválidas.'
        };
      }

      const jwtSecret = process.env.JWT_SECRET;
      
      if (!jwtSecret) {
        throw new Error('JWT_SECRET is not defined');
      }
      
      const token = jwt.sign(
        { userId: user.id }, 
        jwtSecret,
        { expiresIn: '1d' }
      );

      return {
        status: true,
        message: 'Login realizado com sucesso.',
        user: { 
          id: user.id, 
          name: user.name, 
          email: user.email 
        },
        token
      };
    } catch (error) {
      console.error('Error in login service:', error);
      return {
        status: false,
        message: 'Erro ao fazer login.'
      };
    }
  }

  async getAllUsers(): Promise<UserData[]> {
    try {
      return await prisma.user.findMany({
        select: { 
          id: true, 
          name: true, 
          email: true 
        },
      });
    } catch (error) {
      console.error('Error in getAllUsers service:', error);
      throw new Error('Erro ao buscar usuários.');
    }
  }
}

export default new AuthServices();