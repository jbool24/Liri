# Liri

## Command-Line Siri like interface

This is a small demo Command-Line Interface tool that can be used to print user tweets from Twitter, search for music by song title and give you a link to a preview on spotify, or check out movie information based on the title. To use this program you will need to add a 'keys.json' file in the same directory before you begin.


The file must be an Object of Objects each containing the keys for each API. You will need one for The Movie Database which you can get by registering here > [The Movie Database API](https://www.themoviedb.org/documentation/api) and you will also need one for twitter which you get from here > [Twitter API](https://apps.twitter.com/)

```json
/* the file shoould look something like this.
{
  "TWITTER_API": {
      "consumer_key":     "<your credentials>",
      "consumer_secret":  "<your credentials>",
      "bearer_token":     "<your credentials>",

  },
  "TMDB_API": {
      "api_key":          "<your credentials>",
  }
}```

After you clone this repository and add your keys.json file make sure you run:

```bash
# change into cloned directory.
cd <Liri Repo>

# install the necessary modules/libs.
npm install
```

## Comands

To install globally:

```
npm install -g
```

To get started you have the following options

```bash
node liri <command> <[options...]>
```

### Twitter

To get tweets your tweets

```bash
node liri my-tweets <twitter screen name>
```

To get others tweets just pass in the twitter user as the second argument

```bash
node liri my-tweets <some twitter user>
```

### Spotify

To search for songs

```bash
node liri spotify-this-song <song name>
```

### The Movie Database

For a quick movie search.

```bash
node liri movie-this <some movie title>
```
