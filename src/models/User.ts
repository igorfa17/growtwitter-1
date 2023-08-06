export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public username: string;
    public password: string;
    public followers: User[];
    public following: User[];
  
    constructor(name: string, email: string, username: string, password: string) {
      this.id = Date.now().toString(); // Para simplificação, usaremos a timestamp como ID
      this.name = name;
      this.email = email;
      this.username = username;
      this.password = password;
      this.followers = [];
      this.following = [];
    }
  
    follow(user: User): void {
      if (user !== this && !this.following.includes(user)) {
        this.following.push(user);
        user.addFollower(this);
      }
    }
  
    addFollower(user: User): void {
      this.followers.push(user);
    }
  }
  