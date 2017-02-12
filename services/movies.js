const TMDB = require('../lib/tmdb');
const Banner = require('../lib/banner');
const colors = require('colors');

const tmdb = new TMDB();
const banner = new Banner("MOVIES -- SEARCH");

function findMovie(movieName, limit) {
    // Show the banner
    banner.show()
    console.log("Searching...", "\n");
    tmdb.getMovieList(movieName, limit).then((movies) => {
        const movieList = movies.results;

        console.log(colors.underline.bold(`RESULTS (${movieList.length})`), "\n");

        movieList.forEach((item) => {
            let released = "unknown"
            if (item.release_date !== "")
                released = new Date(item.release_date).toDateString();

            console.log("   " + colors.underline("Title") + ": " + item.title);
            console.log("   " + colors.underline("Popularity") + ": " + colors.yellow(Math.ceil(item.popularity) + " Stars") + " out of 10");
            console.log("   " + colors.underline("Release Date") + ": " + released);
            console.log("   " + colors.underline("Overview") + ": " + colors.cyan(item.overview));
            console.log("\n", "-".repeat(68));
        });
    }).catch((e) => console.log(e));
}

module.exports = findMovie;
