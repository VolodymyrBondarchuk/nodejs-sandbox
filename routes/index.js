var express = require('express');
var router = express.Router();
var user = require('../models/user');
var ua = require('../models/user/ua.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  let usr = new user.User(ua.username, ua.email, ua.photoUrl);
  res.render('index', { title: 'Express', user:  usr});
});

module.exports = router;
