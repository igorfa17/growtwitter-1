import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/UserController';
import { TweetController } from '../controllers/TweetController';
import { TweetType } from '../models/Tweet';

const router = Router(); // Create a new instance of express.Router()

const userController = new UserController();
const tweetController = new TweetController();

// Add your route handlers here
// For example:
router.post('/tweets', (req: Request, res: Response) => {
  // Your createTweet route handler implementation
});

router.post('/tweets/like', (req: Request, res: Response) => {
  // Your likeTweet route handler implementation
});

router.post('/tweets/reply', (req: Request, res: Response) => {
  // Your replyToTweet route handler implementation
});

router.get('/tweets', (req: Request, res: Response) => {
  // Your getTweets route handler implementation
});

export default router;
