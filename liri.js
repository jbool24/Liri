#!/usr/bin/env node

const spotify = require("./services/spot.js");
const movies = require("./services/movies.js");

const args = process.argv.slice(2);

switch (args[0]) {
    case "spotify-this":
        spotify(args.slice(1).join(' '));
        break;
    case "movie-this":
        movies("The Calling")
        break;
}
