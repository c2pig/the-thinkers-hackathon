import { initialize } from '../utils/store'
import path from 'path'
import express from 'express'
var router  = express.Router();

const store = initialize(path.basename(__dirname));
//create user profile
router.post('/seeker', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

router.post('/referral', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

//list user profile
router.get('/seeker/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

router.get('/referral/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

//update profile
router.put('/seeker/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

router.put('/referral/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "profile-service"}');
});

module.exports = router;
