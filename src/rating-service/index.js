import { initialize } from '../utils/store'
import path from 'path'
import express from 'express'
import { getUserRating, getAllUserRating, increaseUserRating } from './rating'

const router  = express.Router();

const makeResult = (result) => {
    const data = { result };
    return JSON.stringify(data);
}

router.put('/users/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const result = await increaseUserRating(userId);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(makeResult(result));
});

router.get('/users/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const result = await getUserRating(userId);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(makeResult(result));
});

router.get('/users', async (req, res, next) => {
  const result = await getAllUserRating();
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(makeResult(result));
});

module.exports = router;
