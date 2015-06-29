var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: 'Générateur'});
});

router.get('/contact', function(req, res, next) {
	res.render('contact', {title: 'Générateur'});
});

router.get('/postcontact', function(req, res, next) {
	res.render('postcontact', {title: 'Générateur'});
});

module.exports = router;