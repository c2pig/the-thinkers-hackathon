import { initialize } from '../utils/store'
import path from 'path'
import express from 'express'
var router  = express.Router();

const store = initialize(path.basename(__dirname));

router.get('/', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "list all users"}');
})

router.get('/:userId', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "list user"}');
})

router.post('/', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "create user"}');
})

router.put('/', async (req, res, next) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"resp": "update user"}');
})

module.exports = router;
