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

### Installing

Dependencies are listed in package JSON. To install, open the file and type the following in your terminal:

```
npm i
```

## Running the tests

Possible commands are: 

'concert-this'
'spotify-this-song'
'movie-this'
'do-what-it-says' 

'concert-this' uses the Bandsintown API to retrieve all upcoming concerts for an artist entered in the search parameter. Each venue name, location, and date is provided for all results. Moment.js is used to format the date from the Bandsintown API.

*node liri.js concert-this <artist-name>*

<img width="1230" alt="screen shot 2018-12-09 at 4 05 24 pm" src="https://user-images.githubusercontent.com/40437294/49704882-8b601f00-fbcd-11e8-8584-ae9541ec2f93.png">

'spotify-this-song' uses the Spotify API to retrieve data about the song entered in the search parameter. All song titles that contain the search parameter or parts of it are returned. The user will receive the artist, song name, a link to preview the song, and the album name for each result. If no song is entered, "The Sign" will be the song searched for. 

*node liri.js spotify-this-song <song-name>*

<img width="1222" alt="screen shot 2018-12-09 at 4 06 14 pm" src="https://user-images.githubusercontent.com/40437294/49704889-9f0b8580-fbcd-11e8-8be7-9364a989a679.png">

<img width="1222" alt="screen shot 2018-12-09 at 4 06 39 pm" src="https://user-images.githubusercontent.com/40437294/49704894-afbbfb80-fbcd-11e8-9b25-e2d82dbd2dad.png">

'movie-this' uses the OMDb API to retreive data about the movie entered in the search parameter. The result will include the title, release year, IMDb rating, Rotten Tomatoes rating, country or countries it was filmed in, langauge(s), plot, and actors in the film. If no search is entered, "mr nobody" will be the search parameter.

*node liri.js movie-this <movie-name>*

<img width="1222" alt="screen shot 2018-12-09 at 4 09 34 pm" src="https://user-images.githubusercontent.com/40437294/49704904-cd896080-fbcd-11e8-9563-bb7afacd40ac.png">

<img width="1222" alt="screen shot 2018-12-09 at 3 45 54 pm" src="https://user-images.githubusercontent.com/40437294/49704597-ce1ff800-fbc9-11e8-8ba7-ec663ec154be.png">

'do-what-it-says' is a command that reads the random.txt file and executes the parameters inside of it. By default, it is set to 'spotify-this-song,I Want It That Way'

*node liri.js do-what-it-says*

<img width="1222" alt="screen shot 2018-12-09 at 4 10 49 pm" src="https://user-images.githubusercontent.com/40437294/49704916-f0b41000-fbcd-11e8-9e24-63b43dfaeb32.png">


## Built With
 Javascript, Node.js, Moment.js, Bandsintown API, Spotify API, OMDb API


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
