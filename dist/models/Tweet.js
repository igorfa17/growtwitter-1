"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tweet = exports.TweetType = void 0;
var TweetType;
(function (TweetType) {
    TweetType["NORMAL"] = "normal";
    TweetType["REPLY"] = "reply";
})(TweetType || (exports.TweetType = TweetType = {}));
class Tweet {
    constructor(user, content, type) {
        this.id = Date.now().toString();
        this.user = user;
        this.content = content;
        this.type = type;
        this.likes = [];
        this.replies = [];
    }
    like(user) {
        if (!this.likes.includes(user)) {
            this.likes.push(user);
        }
    }
    reply(user, content) {
        const replyTweet = new Tweet(user, content, TweetType.REPLY);
        this.replies.push(replyTweet);
    }
}
exports.Tweet = Tweet;
