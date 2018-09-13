var express = require('express');
var router = express.Router();
var config = require('../memoryCache');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Refresh config', config: JSON.stringify(config.getCache()) });
});

router.get('/setCofig', function(req, res, next) {
  let json = {
    appName: 'its refreshed',
    emailEnabled: true,
    smsEnabled: false,
    refreshed: true,
    environment: 'development',
    appStatus: 'online'
  };
  config.init(json).then(() => {
    console.log('Successfully reset config');
    res.redirect('/');
  });
});

module.exports = router;
