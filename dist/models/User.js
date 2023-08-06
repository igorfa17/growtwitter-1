"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, username, password) {
        this.id = Date.now().toString(); // Para simplificação, usaremos a timestamp como ID
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.followers = [];
        this.following = [];
    }
    follow(user) {
        if (user !== this && !this.following.includes(user)) {
            this.following.push(user);
            user.addFollower(this);
        }
    }
    addFollower(user) {
        this.followers.push(user);
    }
}
exports.User = User;
