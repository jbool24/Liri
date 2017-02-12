const https = require('https');

// Makes Call to API
function makeResponse(hollaback) {
    let chunks = '';

    return function(response) {
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
            chunks += chunk;
        });

        response.on('end', function() {
            let json;
            let err;

            try {
                json = JSON.parse(chunks);
            } catch (e) {
                err = e;
                console.log(e);
            }

            hollaback(err, json);
        });
    };
}

module.exports = {
    /**
     * Reverse-lookup a track, artist or album URI
     *
     * @param {Object} Options that should be used to do this query
     *                 `type` and `id` is required
     * @param {Function} The hollaback that'll be invoked once there's data
     */
    lookup: function(opts, hollaback) {
        const type = opts.type + 's';
        const query = '/v1/' + type + '/' + opts.id;
        this.get(query, hollaback);
    },

    /**
     * Search the Spotify library for a track, artist or album
     *
     * @param {Object} Options that should be used to do this query
     * @param {Function} The hollaback that'll be invoked once there's data
     */
    search: function(opts, hollaback) {
        const keys = Object.keys(opts);
        let qryStr = "";

        for (let key in keys) {
            if (keys[key] === "query" || keys[key] === "q") {
                qryStr += `${keys[key]}=${opts[keys[key]].replace(/ /g, "+")}`;
            } else {
                qryStr += `${keys[key]}=${opts[keys[key]]}`;
            }

            if (keys.length > 1 && key < keys.length - 1)
                qryStr += "&";
            }

        const query = `/v1/search?${qryStr}`;
        this.get(query, hollaback);
    },

    /**
     * Send a request to the Spotify web service API
     *
     * @param {String} The path for this query, see http://developer.spotify.com/en/metadata-api/overview/
     * @param {Function} The hollaback that'll be invoked once there's data
     */
    get: function(query, hollaback) {

        const opts = {
                host: "api.spotify.com",
                path: encodeURI(query),
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            },
            request = https.request(opts, makeResponse(hollaback));
        request.end();

        request.on('error', function(err) {
            hollaback(err, {});
        });
    }
};
