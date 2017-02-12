const request = require('request');

const APPKEY = 'a94329a1a1d0bf5b62af40d49928bf8c';

class TMDB {
    constructor(opts) {
        this.opts = Object.assign({}, opts);
        console.log(this.opts.uname);

    }

    getMovie(movie) {
        // const appkey = this.opts.api_key;
        // console.log(movie)
        return new Promise((resolve, reject) => {
            return request({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                qs: {
                    query: movie,
                    api_key: APPKEY
                },
                body: '{}'
            }, (error, response, body) => error ? reject(error) : resolve(body));
        });
    }

    formatResults(data) {
        console.log(data[0])
    }
}

module.exports = TMDB;
