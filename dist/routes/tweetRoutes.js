"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const TweetController_1 = require("../controllers/TweetController");
const router = (0, express_1.Router)(); // Create a new instance of express.Router()
const userController = new UserController_1.UserController();
const tweetController = new TweetController_1.TweetController();
// Add your route handlers here
// For example:
router.post('/tweets', (req, res) => {
    // Your createTweet route handler implementation
});
router.post('/tweets/like', (req, res) => {
    // Your likeTweet route handler implementation
});
router.post('/tweets/reply', (req, res) => {
    // Your replyToTweet route handler implementation
});
router.get('/tweets', (req, res) => {
    // Your getTweets route handler implementation
});
exports.default = router;
