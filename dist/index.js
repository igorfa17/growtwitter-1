"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Rotas para os usuários
app.post('/users', createUser);
app.get('/users', getUsers);
// Rotas para os tweets
app.post('/tweets', createTweet);
app.post('/tweets/like', likeTweet);
app.post('/tweets/reply', replyToTweet);
app.get('/tweets', getTweets);
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
