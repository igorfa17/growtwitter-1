import { User } from './User';

export enum TweetType {
  NORMAL = 'normal',
  REPLY = 'reply',
}

export class Tweet {
  public readonly id: string;
  public content: string;
  public type: TweetType;
  public user: User;
  public likes: User[];
  public replies: Tweet[];

  constructor(user: User, content: string, type: TweetType) {
    this.id = Date.now().toString();
    this.user = user;
    this.content = content;
    this.type = type;
    this.likes = [];
    this.replies = [];
  }

  like(user: User): void {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  reply(user: User, content: string): void {
    const replyTweet = new Tweet(user, content, TweetType.REPLY);
    this.replies.push(replyTweet);
  }
}
