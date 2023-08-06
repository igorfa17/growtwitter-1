"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    constructor() {
        this.users = [];
    }
    createUser(name, email, username, password) {
        const newUser = new User_1.User(name, email, username, password);
        this.users.push(newUser);
        return newUser;
    }
    findUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    findUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    }
    getUsers() {
        return this.users;
    }
}
exports.UserController = UserController;
