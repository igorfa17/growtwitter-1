import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/UserController';
import { TweetController } from '../controllers/TweetController';
import { TweetType } from '../models/Tweet';

const router = Router();
const userController = new UserController();
const tweetController = new TweetController();

router.post('/tweets', (req: Request, res: Response) => {
  const { userId, content, type } = req.body;
  const user = userController.findUserById(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  const tweet = tweetController.createTweet(user, content, type as TweetType);
  return res.status(201).json(tweet);
});

router.post('/tweets/like', (req: Request, res: Response) => {
  const { tweetId, userId } = req.body;
  const user = userController.findUserById(userId);
  const tweet = tweetController.getTweets().find((tweet) => tweet.id === tweetId);

  if (!user || !tweet) {
    return res.status(404).json({ error: 'User or tweet not found.' });
  }

  tweetController.likeTweet(tweet, user);
  return res.status(200).json({ message: 'Tweet liked successfully.' });
});

router.post('/tweets/reply', (req: Request, res: Response) => {
  const { tweetId, userId, content } = req.body;
  const user = userController.findUserById(userId);
  const tweet = tweetController.getTweets().find((tweet) => tweet.id === tweetId);

  if (!user || !tweet) {
    return res.status(404).json({ error: 'User or tweet not found.' });
  }

  tweetController.replyToTweet(tweet, user, content);
  return res.status(200).json({ message: 'Tweet replied successfully.' });
});

router.get('/tweets', (req: Request, res: Response) => {
  const tweets = tweetController.getTweets();
  return res.status(200).json(tweets);
});

export default router;
