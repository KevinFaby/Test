var express = require('express');
var router = express.Router();

var pg = require('pg');
var constring = "postgres://postgres:NHLsurvivor@localhost:5432/postgres";

pg.connect(constring, function(err, client, done) {
	if (err)
		return console.error('error fetching client from pool', err);
	client.query('SELECT * FROM \"Monstre\" WHERE "ID" = 2', function(err, result) {
		done();
		if(err)
			return console.error('error running query', err);
		console.log(result.rows);
	})
});

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {title: 'Générateur'});
});

module.exports = router;
