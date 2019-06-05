# LIRI

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI will search Bandsintown for concerts, Spotify for songs, and OMDB for movies.


### Installing

Dependencies are listed in package JSON. To install, open the file and type the following in your terminal:

```
npm install
```

## Running the tests

Possible commands are: 

`concert-this`   `spotify-this`    `movie-this`   `random` 

---

`node liri.js concert-this <artist-name>`
 
`concert-this` uses the Bandsintown API to retrieve all upcoming concerts for an artist entered in the search parameter. Each venue name, location, and date is provided for all results. Moment.js is used to format the date from the Bandsintown API.

![](concert-this.gif)
---

`node liri.js spotify-this <song-name>`
 
`spotify-this` uses the Spotify API to retrieve data about the song entered in the search parameter. All song titles that contain the search parameter or parts of it are returned. The user will receive the artist, song name, a link to preview the song, and the album name for each result. If no song is entered, the search parameter will be set to "The Sign". 

![](spotify-this.gif)
---

`node liri.js movie-this <movie-name>`
 
`movie-this` uses the OMDb API to retreive data about the movie entered in the search parameter. The result will include the title, release year, IMDb rating, country or countries it was filmed in, langauge(s), plot, and actors in the film. If no search is entered, the search parameter will be set to "Mr. Nobody".

![](movie-this.gif)
---

`node liri.js random`

`random` is a command that reads the random.txt file and executes the parameters inside of it. By default, it is set to 'spotify-this, I Want It That Way'.

![](random.gif)
---

## Built With
 Javascript, Node.js, Moment.js, Bandsintown API, Spotify API, OMDb API

## Authors

**Amanda Murillo** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
