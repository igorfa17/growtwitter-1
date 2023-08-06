"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetController = void 0;
const Tweet_1 = require("../models/Tweet");
class TweetController {
    constructor() {
        this.tweets = [];
    }
    createTweet(user, content, type) {
        const newTweet = new Tweet_1.Tweet(user, content, type);
        this.tweets.push(newTweet);
        return newTweet;
    }
    likeTweet(tweet, user) {
        tweet.like(user);
    }
    replyToTweet(tweet, user, content) {
        tweet.reply(user, content);
    }
    getTweets() {
        return this.tweets;
    }
}
exports.TweetController = TweetController;
