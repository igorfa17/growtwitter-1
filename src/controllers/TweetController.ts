import { User } from '../models/User';
import { Tweet, TweetType } from '../models/Tweet';

export class TweetController {
  private tweets: Tweet[];

  constructor() {
    this.tweets = [];
  }

  createTweet(user: User, content: string, type: TweetType): Tweet {
    const newTweet = new Tweet(user, content, type);
    this.tweets.push(newTweet);
    return newTweet;
  }

  likeTweet(tweet: Tweet, user: User): void {
    tweet.like(user);
  }

  replyToTweet(tweet: Tweet, user: User, content: string): void {
    tweet.reply(user, content);
  }

  getTweets(): Tweet[] {
    return this.tweets;
  }
}
