import { Request, Response } from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();

export const createUser = (req: Request, res: Response) => {
  const { name, email, username, password } = req.body;
  const existingUser = userController.findUserByUsername(username);

  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists.' });
  }

  const user = userController.createUser(name, email, username, password);
  return res.status(201).json(user);
};

export const getUsers = (req: Request, res: Response) => {
  const users = userController.getUsers();
  return res.status(200).json(users);
};
