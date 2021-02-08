const express = require('express');
const board = require('./borad');
 
const router = express.Router();
router.use('/board',board);
 
module.exports =  router;