#!/usr/bin/env node

const spotify = require("./services/spot.js");
const movies = require("./services/movies.js");
const tweets = require("./services/tweet.js")

const args = process.argv.slice(2);

switch (args[0]) {
    case "spotify-this-song":
        spotify(args.slice(1).join(' '));
        break;
    case "movie-this":
        movies(args.slice(1).join(' ')); //"The Calling"
        break;
    case "my-tweets":
        tweets(args[1]);
        break;
}
