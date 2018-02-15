var express = require('express');
var router = express.Router();
// Example from yelp's github
const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'EyYI_U4MtffkcWkL9k6I9uSD1OTBsZwszl71QukNm5zTTvE43_UF8GG556tis1SsB6LCJDR_Ua1Vzzvn21PnpYxlzV_M1kAOcC_JmjHj-F0NsJRDV0c2fLPop8b2WXYx'; // change this key



const client = yelp.client(apiKey);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);

  const searchRequest = {
  term: req.query.term,
  location: 'san francisco, ca'
};
	client.search(searchRequest).then(response => {
	  const firstResult = response.jsonBody.businesses[0];
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
