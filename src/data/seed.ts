import { User } from '../models/User';
import { Tweet, TweetType } from '../models/Tweet';
import { users, tweets } from '../data/data';

const user1 = new User('John Doe', 'john@example.com', 'john_doe', 'password1');
const user2 = new User('Jane Smith', 'jane@example.com', 'jane_smith', 'password2');
const user3 = new User('Mike Johnson', 'mike@example.com', 'mike_johnson', 'password3');

users.push(user1, user2, user3);

const tweet1 = new Tweet(user1, 'Hello, world!', TweetType.NORMAL);
const tweet2 = new Tweet(user2, 'This is a reply!', TweetType.REPLY);
const tweet3 = new Tweet(user3, 'Another tweet!', TweetType.NORMAL);

tweet1.like(user2);
tweet1.like(user3);
tweet1.reply(user2, 'Nice tweet!');
tweet2.like(user1);
tweet3.like(user1);
tweet3.like(user2);

tweets.push(tweet1, tweet2, tweet3);

console.log('Seed data created successfully.');
