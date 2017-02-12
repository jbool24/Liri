# Liri

## Command-Line Siri like interface

This is a small demo Command-Line Interface tool that can be used to print user tweets from Twitter, search for music by song title and give you a link to a preview on spotify, or check out movie information based on the title.

After you clone this repository make sure you run:

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
