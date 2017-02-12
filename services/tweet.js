const Twitter = require('twitter');
const Banner = require('../lib/banner')
const colors = require("colors");

const keys = require("../keys.json").TWITTER_API;

// Returns usernames last 10 tweets and when they were created
function tweets(screenName) {
    const client = new Twitter(keys);
    const params = {
        screen_name: screenName || 'JBellero',
        count: 10
    };

    client.get("statuses/user_timeline", params, (error, tweets, response) => {

        const banner = new Banner(`TWITTER -- ${tweets[0].user.screen_name}`);

        if (!error) {

            banner.show()
            console.log(colors.bold.underline("Tweets"));

            tweets.forEach(tweet => {
                const tweetOn = new Date(tweet.created_at)
                console.log("-".repeat(68),"\n");
                console.log("   Tweet Created: " + tweetOn.toDateString());
                console.log(" ".repeat(10) + colors.cyan(tweet.text));
            });

        } else if (error) {
            throw new Error(error);
        }
    });
}
module.exports = tweets;
