const numberOfFilms = Number(
  prompt("How many films have you seen recently?", "1")
);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

/*const film = prompt("What first film have you recently seen?");
const rating = Number(prompt("How do you rate this film?"));
const film2 = prompt("What second film have you recently seen?");
const rating2 = Number(prompt("How do you rate this film?"));
*/

// for (let i = 1; i < 3; i++) {
//   film = prompt(`What ${i} film have you recently seen?`);

//   while (!film || film.length > 50) {
//     film = prompt(`What ${i} film have you recently seen?`);
//   }

//   rating = Number(prompt(`How do you rate ${i} film?`));
//   personalMovieDB.movies[film] = rating;
// }

let film, rating;
for (let i = 1; i < 3; ) {
  if (film && film.length <= 50) {
    rating = prompt(`How do you rate ${i} film?`);

    if (rating && !isNaN(rating)) {
      personalMovieDB.movies[film] = Number(rating);
      film = null;
      rating = null;
      i++;
    }
  } else {
    film = prompt(`What ${i} film have you recently seen?`);
  }
}

// while (Object.keys(personalMovieDB.movies).length < 2) {
//   const i = Object.keys(personalMovieDB.movies).length + 1;
//   film = prompt(`What ${i} film have you recently seen?`);

//   if (film && film.length <= 50) {
//     rating = Number(prompt(`How do you rate ${i} film?`)) || 0;
//     personalMovieDB.movies[film] = rating;
//   }
// }

// do {
//   const i = Object.keys(personalMovieDB.movies).length + 1;
//   film = prompt(`What ${i} film have you recently seen?`);
//   if (film && film.length <= 50) {
//     rating = Number(prompt(`How do you rate ${i} film?`)) || 0;
//     personalMovieDB.movies[film] = rating;
//   }
// } while(Object.keys(personalMovieDB.movies).length < 2);

if (personalMovieDB.count < 10) {
  alert("You have seen few films");
} else if (personalMovieDB.count < 30) {
  alert("You are ordinar films-viewer");
} else if (personalMovieDB.count > 30) {
  alert("You are really into films");
} else {
  alert('Error');
}

//personalMovieDB.movies[film] = rating;
//personalMovieDB.movies[film2] = rating2;

// console.log(numberOfFilms);
// console.log(film);
// console.log(rating);
console.log(personalMovieDB.movies);
