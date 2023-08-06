import { User } from '../models/User';

export class UserController {
  private users: User[];

  constructor() {
    this.users = [];
  }

  createUser(name: string, email: string, username: string, password: string): User {
    const newUser = new User(name, email, username, password);
    this.users.push(newUser);
    return newUser;
  }

  findUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  getUsers(): User[] {
    return this.users;
  }
}
