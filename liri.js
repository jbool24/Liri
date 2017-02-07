#!/usr/bin/env node

const tweet = require("./services/tweet.lock.js");
const spotify = require("./services/spot.js");
// const imdb = require("./services/imdb.js");

const args = process.argv.slice(2);

switch (args[0]){
  case "my-tweets":
    tweet.getTweets(args[1]);
    break;
  case "spotify-this":
    spotify(args.slice(1).toString());
    break;
}
