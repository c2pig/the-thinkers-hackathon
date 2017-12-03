import { initialize } from '../utils/store'
import path from 'path'
import express from 'express'
var router  = express.Router();

const store = initialize(path.basename(__dirname));

const increaseRating = async (userId) => {
  const rating = await store.findDocByFieldValue("rating", 'userId', userId);

  if(rating.length === 0) {
    return store.addWithId("rating", { userId, rating: 1 }, userId);
  } else {
    let newRating = rating[0].rating + 1;
    const ret = await store.update("rating", { userId, rating: newRating }, userId);
    return ret;
  }
}

router.put('/users/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const id = await increaseRating(userId);
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(`{"id": "${id}"}`);
  next();
});

router.get('/users/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  const result = await store.findDocByFieldValue("rating", "userId", userId);
  console.log(result)
  res.writeHead(200, {'Content-Type': 'application/json'});
  const data = { result };

  res.end(JSON.stringify(data));
});

router.get('/users', async (req, res, next) => {
  const result = await store.findAll("rating");
  res.writeHead(200, {'Content-Type': 'application/json'});
  const data = { result };

  res.end(JSON.stringify(data));
});

module.exports = router;
