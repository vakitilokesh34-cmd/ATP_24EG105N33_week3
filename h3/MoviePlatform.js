// This script simulates a simple movie database management system.

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Filter: Let's pick out only the Sci-Fi movies.
let sciFiMovies = movies.filter(movie => movie.genre === 'Sci-Fi')
console.log("Only Sci-Fi movies:", sciFiMovies)

// 2. Map: Create a clean list of movie titles followed by their ratings.
let movieSummary = movies.map(m => `${m.title} (${m.rating})`);
console.log("Movie Summaries:", movieSummary)

// 3. Reduce: Calculate the average rating of all movies in our list.
let totalRating = movies.reduce((acc, movie) => acc + movie.rating, 0)
console.log("Average movie rating:", totalRating / movies.length)

// 4. Find: Search for the movie titled "Joker".
let foundMovie = movies.find(movie => movie.title === 'Joker')
console.log("Found Movie Details:", foundMovie)

// 5. FindIndex: Find the position of "Avengers" in our array.
let avengersIndex = movies.findIndex(movie => movie.title === 'Avengers')
console.log("Position (Index) of Avengers:", avengersIndex)
