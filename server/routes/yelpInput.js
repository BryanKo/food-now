var express = require('express');
var router = express.Router();

const yelp = require('yelp-fusion');

const apiKey = 'sVX4lUzEERso8L9-61gN8ZojgRWKlATmMcuAeruVlXsVd4cB8OKhlrpXWZUNN8fDeF6lY-wFxhFcHwIa9HsuhogXy1GBkarqgsY8wEkPPn4O0k1JXgsEIQ8YjXlyWnYx';

const client = yelp.client(apiKey);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);

  const searchRequest = {
    term: req.query.term,
		location: 'santa cruz, ca',
		categories: req.query.categories
	};
	console.log("backend request: " + searchRequest);
	client.search(searchRequest).then(response => {
    // Randomly grab 1 restaurant from results (from 20)
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
