//----Dependancies -----------------
const Banner = require('../lib/banner')
const spotify = require('../lib/spotify');
// const spotify = require('spotify');
const colors = require('colors');
const util = require('util');

//----Marquee ----------------------
const banner = new Banner("SPOTIFY -- SEARCH");
banner.show();
//----End Marquee ------------------

function findSong(songName) {
    const query = {
        type: 'track',
        query: songName || 'The Sign',
        limit: 5
    };

    console.log("\n", colors.bold.underline("Results for " + (songName.toUpperCase() || "The Sign")), "\n");
    spotify.search(query, onSearchCallback);
}


function onSearchCallback(e, data) {
    //---- Construct display info if no errors
    
    if (!e) {
        for (let i in data.tracks.items) {
            const item = data.tracks.items[i];

            //------ Create artists list
            let artistList = "";
            for (let artist in item.artists) {

                artistList += item.artists[artist].name;

                if (artist < item.artists.length - 1) {
                    artistList += ", ";
                }
            }

            //------ Display info
            console.log("   " + colors.underline("Song") + ": " + item.name + util.format(" (Track #%d)", item.track_number));
            console.log("   " + colors.underline("Album") + ": " + item.album.name);
            console.log("   " + colors.underline("Artists") + ": " + colors.cyan(artistList));
            console.log("   " + colors.underline("Preview") + ": " + item.preview_url.toString());
            console.log("   " + colors.underline("Popularity") + ": " + item.popularity.toString());
            console.log("\n", "-".repeat(68))
        }

    } else if (e) {
        console.log(e);
    }
}

module.exports = findSong;
