"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const UserController_1 = require("../controllers/UserController");
const userController = new UserController_1.UserController();
const createUser = (req, res) => {
    const { name, email, username, password } = req.body;
    const existingUser = userController.findUserByUsername(username);
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists.' });
    }
    const user = userController.createUser(name, email, username, password);
    return res.status(201).json(user);
};
exports.createUser = createUser;
const getUsers = (req, res) => {
    const users = userController.getUsers();
    return res.status(200).json(users);
};
exports.getUsers = getUsers;
