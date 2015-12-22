var spotifyQuery = "/search?type=artist&q=";
var spotifyURL = "https://api.spotify.com/v1";

var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res) {
	res.render('index');
});

router.post('/artists', function(req, res) {
	req(spotifyURL + spotifyQuery + req.body.q, function(error, res, body){
		var parse = JSON.parse(body);
		res.render('artists', {
			allArtists: parse.artists.items
		});
	});
});



module.exports = router;