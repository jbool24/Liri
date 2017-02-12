const fs = require('fs');
const request = require('request');
const api_key = require('../keys.json').TMDB_API.api_key;

class TMDB {
    constructor(opts) {
        this.opts = Object.assign({}, opts);
    }

    getMovieList(movie, limit = 3) {
        return new Promise((resolve, reject) => {
            request({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                qs: {
                    query: movie,
                    api_key: this.opts.api_key || api_key
                },
                body: '{}'
            }, (error, response, body) => {
                const data = {
                    results: JSON.parse(body).results.slice(0, limit)
                }

                data.errors
                    ? reject("Error: " + data.errors, error)
                    : resolve(data)
            });
        });
    }

    logToJSON(data) {
        fs.writeFile("./tmdbLog.json", JSON.stringify(data, null, 2), () => {});
    }
}

module.exports = TMDB;
