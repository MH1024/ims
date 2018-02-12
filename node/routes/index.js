var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/reg', function(req, res, next) {
  res.render('index', { title: 'Register' });
});
router.post('/reg', function(req, res, next) {
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.post('/login', function(req, res, next) {
});
router.get('/order', function(req, res, next) {
  res.render('order', { title: 'Order' });
});
router.post('/order', function(req, res, next) {
});
router.get('/logout', function(req, res, next) {
  res.render('logout', { title: 'Logout' });
});

module.exports = router;
