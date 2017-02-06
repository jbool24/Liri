//----Dependancies------------------
const spotify = require('spotify');
const colors = require('colors');
const util = require('util');

//----Marquee ----------------------
const base = "/";
const border = base.repeat(68);
const title = "SPOTIFY -- SEARCH ";
const titleLen = title.length;

console.log(border);
console.log("///// " + colors.blue.bold(title) + base.repeat(62 - titleLen));
console.log(border);


function findSong(songName) {
    const query = { type: 'track', query: songName || 'The Sign' };

    console.log("\n", colors.bold.underline("Results for " + songName.toUpperCase(), "\n"));
    spotify.search(query, getInfo);
}


function getInfo(e, data) {

    //---- Construct display info if no errors
    if (!e) {
        for (i in data.tracks.items) {
            var item = data.tracks.items[i];
            //------ Create artists list

            var artistList = "";
            for (artist in item.artists) {

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
            console.log("\n", "-".repeat(68))
        }

    } else if (e) {
        console.log(e);
    }
}

module.exports = findSong;
