// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
var chalk = require("chalk")
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var whatToDo = process.argv[2];
var input = process.argv.slice(3).join(" ");

var getArtistNames = function(artist) {
  return artist.name;
};

function concertThis(input) {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
    function (response) {

      response.data.forEach(concert => {
      console.log(chalk.yellow.bold("---------------------------------------------------"))
        console.log(concert.venue.name)
        console.log(concert.venue.city + ", " + (concert.venue.region || concert.venue.country))
        console.log(moment(concert.datetime).format("MM/DD/YYYY"));
        // console.log(chalk.bgRed.boclld.blue("---------------------------"))
      })
    }
  );
}


function spotifyThis(input) {
  if (!input) {
    input = "The Sign";
  }

  spotify.search(
  { 
    type: 'track',
    query: input 
  },
  function (err, data) {
    if (err) {
       console.log('Error occurred: ' + err);
       return;
    }

    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++) {

    console.log(chalk.blue.bold("---------------------------------------------------"))
    console.log(i);
    console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
    console.log("Song name: " + songs[i].name);
    console.log("Preview song: " + songs[i].preview_url);
    console.log("Album: " + songs[i].album.name);
    // console.log(chalk.blue.bold("-----------------------------------"));

    }
  }
  );
}


function movieThis(input) {
  if (!input) {
    input = "The Matrix";
  }

  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
    function (response) {

      console.log(chalk.green.bold("\n---------------------------------------------------\n"))
      console.log("Title: " + response.data.Title);
      console.log("Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Movie Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log(chalk.green.bold("\n---------------------------------------------------\n"))
    }
  )
};

function doIt() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    var arr = data.split(",");
    var task = arr[0];
    var input = arr[1].split('"').join('');

    if (error) {
      return console.log(error);
    }

    if (task === "concert-this"){
      concertThis(input);
    }
    if (task === "spotify-this"){
      spotifyThis(input);
    }
    if (task === "movie-this"){
      movieThis(input);
    }

  });
}
// MAIN PROCESS
// =====================================

function runLiri(whatToDo, input) {

  if (whatToDo === "concert-this") {
    concertThis(input);
  }
  if (whatToDo === "spotify-this") {
    spotifyThis(input);
  }
  if (whatToDo === "movie-this") {
    movieThis(input);
  }
  if (whatToDo === "random") {
    doIt();
  }
}


runLiri(whatToDo, input);

