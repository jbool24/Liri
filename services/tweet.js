const Twitter = require('twitter');

// last 20 tweets and when they were created
const client = new Twitter({
  "consumer_key": process.env['TWITTER_CONSUMER_KEY'],
  "consumer_secret": process.env['TWITTER_CONSUMER_SECRET'],
  "access_token_key": process.env['TWITTER_ACCESS_TOKEN'],
  "access_token_secret": process.env['TWITTER_ACCESS_SECRET']
});
