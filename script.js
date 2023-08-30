const numberOfFilms = Number(prompt('How many films have you seen recently?', '1'));
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const film = prompt("What first film have you recently seen?");
const rating = Number(prompt("How do you rate this film?"));
const film2 = prompt("What second film have you recently seen?");
const rating2 = Number(prompt("How do you rate this film?"));

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film2] = rating2;

// console.log(numberOfFilms);
// console.log(film);
// console.log(rating);
console.log(personalMovieDB.movies);
