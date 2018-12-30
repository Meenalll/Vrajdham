var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var config = require('.././config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
  })


module.exports = router;
