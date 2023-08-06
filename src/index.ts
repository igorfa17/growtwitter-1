import express from 'express';
import bodyParser from 'body-parser';
import { createUser, getUsers } from './routes/userRoutes';
import { createTweet, likeTweet, replyToTweet, getTweets } from './routes/tweetRoutes';

const app = express();

app.use(bodyParser.json());

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
