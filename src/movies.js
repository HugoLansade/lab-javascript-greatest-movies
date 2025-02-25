const movies = require("./data")

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArray = movies.map (movie => movie.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies == "") return 0;
  const scores = movies.reduce(function (sum, current) {
    if (!current.score) {
      return sum;
    } else {
      return sum + current.score;
    }
  } ,0)
  const res = scores / movies.length ;
  return Number(res.toFixed(2));

}

//console.log(scoresAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 
  //On veut sommer les films de genre drama pour ensuite les diviser par le nombre de film
  const arrayMovie = movies.filter(function(movie) {    
    return (movie.genre.includes("Drama"));    
  });
  if (arrayMovie.length === 0) return 0;
  const tabScore = arrayMovie.map(element => element.score);
  const sumScore = tabScore.reduce(function(acc,v){
    return (acc + v);
  },0);
  const resultat = Number((sumScore/tabScore.length).toFixed(2))
  
  console.log("resultat1 :" + resultat);
  return resultat;
 }
console.log("resultat : "+dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const solutionArray = [ ...movies];
  solutionArray.sort(function (movieA,movieB) {
    if (movieA.year < movieB.year) return -1;
    if (movieA.year > movieB.year) return 1;
    if (movieA.year === movieB.year) {
      if (movieA.title < movieB.title) return -1;
      if (movieA.title < movieB.title) return 1;
  }
  });
return solutionArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const solutionArray = [ ...movies];
  solutionArray.sort(function (movieA,movieB) {
    if (movieA.title < movieB.title) return -1;
    if (movieA.title > movieB.title) return 1;
    return 0;
  })
  const newArray = solutionArray.map(movie => movie.title);
  const lastArray= newArray.slice(0,20);
  return lastArray;
  }
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
