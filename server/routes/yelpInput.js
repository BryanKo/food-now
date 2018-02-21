var express = require('express');
var router = express.Router();
// Example from yelp's github
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'sVX4lUzEERso8L9-61gN8ZojgRWKlATmMcuAeruVlXsVd4cB8OKhlrpXWZUNN8fDeF6lY-wFxhFcHwIa9HsuhogXy1GBkarqgsY8wEkPPn4O0k1JXgsEIQ8YjXlyWnYx'; // change this key

const client = yelp.client(apiKey);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);

  const searchRequest = {
    term: req.query.term,
    location: 'san francisco, ca'
  };
	client.search(searchRequest).then(response => {
	  const firstResult = response.jsonBody.businesses[Math.floor(Math.random() * Object.keys(response.jsonBody.businesses).length)];
	  const prettyJson = JSON.stringify(firstResult, null, 4);
	  console.log(prettyJson);

  	  res.send(prettyJson);
	  // logic
	}).catch(e => {
	  console.log(e);
	  res.status(500).json({error: e});
	});

});

module.exports = router;
