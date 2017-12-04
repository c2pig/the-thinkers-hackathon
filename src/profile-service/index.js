import { initialize } from '../utils/store'
import path from 'path'
import express from 'express'
var router  = express.Router();

const store = initialize(path.basename(__dirname));
//create user profile
router.post('/seeker', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "create seek profile"}');
});

router.post('/referral', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "create job referal profile"}');
});

//list user profile
router.get('/seeker/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "list user profile"}');
});

router.get('/referral/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "list referral profile"}');
});

//update profile
router.put('/seeker/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "update seeker profile"}');
});

router.put('/referral/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "update referral profile"}');
});

module.exports = router;
