# liri-node-app

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI will search Bands in Town for concerts, Spotify for songs, and OMDB for movies.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
npm install --save node-spotify-api

```
```
npm i axios
```

```
npm i moment
```

```js
require("dotenv").config();
```
    "dotenv": "^6.1.0",
    "moment": "^2.22.2",
    "node-spotify-api": "^1.0.7"

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

https://giphy.com/gifs/PoImSL1455eBEFvjij/html5

## Running the tests


Possible commands are: 

'concert-this'
'spotify-this-song'
'movie-this'
'do-what-it-says' 


'concert-this' uses the Bandsintown API to retrieve all upcoming concerts for an artist that is searched. Each venue name, location, and date is provided for all results. Moment.js is used to format the date from the Bandsintown API.

Example 1: node liri.js concert-this the pixies
Example 2: node liri.js concert-this drake

'spotify-this-song' uses the Spotify API to retrieve data about the song entered in the search parameter. All song titles that contain the search parameter or parts of it are returned. The user will receive the artist, song name, a link to preview the song, and the album name for each result. If no search is entered, "The Sign" will be the song searched for. 

Example 1: node liri.js spotify-this-song u got it bad
Example 1: node liri.js spotify-this-song u got it bad
Example 3: node liri.js spotify-this-song 

'movie-this' uses the OMDb API to retreive data about the movie entered in the search parameter. The result will include the title, release year, IMDb rating, Rotten Tomatoes rating, country or countries it was filmed in, langauge(s), plot, and actors in the film. If no search is entered, "mr nobody" will be the movie searched for.

Example 1: node liri.js movie-this halloween
Example 2: node liri.js movie-this white chicks
Example 3: node liri.js movie-this 

'do-what-it-says' is a command that reads the random.txt file and executes the parameters inside of it. By default it is set to 'spotify-this-song,I Want It That Way'

Example 1: node liri.js do-what-it-says

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With
 Javascript, Node.js, Moment.js, Bandsintown API, Spotify API, OMDb API

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

**Amanda Murillo** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* 
* 
* 
