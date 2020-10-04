var express = require('express');
var router = express.Router();
var emprendioControllers = require('../controllers/emprendioControllers')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', emprendioControllers.home);

module.exports = router;
