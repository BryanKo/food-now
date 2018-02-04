var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresswow' });
});

module.exports = router;


// Example from yelp's github
'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'EyYI_U4MtffkcWkL9k6I9uSD1OTBsZwszl71QukNm5zTTvE43_UF8GG556tis1SsB6LCJDR_Ua1Vzzvn21PnpYxlzV_M1kAOcC_JmjHj-F0NsJRDV0c2fLPop8b2WXYx'; // change this key

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});