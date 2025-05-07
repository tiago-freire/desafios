import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma/client';
import { JWT_SECRET } from '../config/env';
import { IUser } from '../models/User';

export const AuthService = {
  async register({ name, email, password }: IUser) {
    const hashedPassword = await bcrypt.hash(password!, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return { id: user.id, name: user.name, email: user.email };
  },

  async login({ email, password }: IUser) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password!, user.password!))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1d' });
    return { token, user: { id: user.id, name: user.name, email: user.email } };
  },
};
