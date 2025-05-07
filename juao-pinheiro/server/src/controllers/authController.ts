import { Request, Response } from 'express';
import authServices from '../services/authServices';


export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await authServices.register(req.body);
    
    if (result.status) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    console.error('Controller error in register:', error);
    res.status(500).json({ 
      status: false,
      message: 'Erro ao registrar usuário.' 
    });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await authServices.login(req.body);
    
    if (result.status) {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  } catch (error) {
    console.error('Controller error in login:', error);
    res.status(500).json({ 
      status: false,
      message: 'Erro ao fazer login.' 
    });
  }
};

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await authServices.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Controller error in getUsers:', error);
    res.status(500).json({ 
      status: false,
      message: 'Erro ao buscar usuários.' 
    });
  }
};