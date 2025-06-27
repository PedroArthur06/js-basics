const movies = [
  { title: "Inception", year: 2010, rating: 4.5 },
  { title: "The Matrix", year: 1999, rating: 5.0 },
  { title: "Interstellar", year: 2014, rating: 5.0 },
  { title: "The Dark Knight", year: 2008, rating: 4.8 },
  { title: "Pulp Fiction", year: 1994, rating: 3 }
]

// rating > 4.5
// year > 2000

function showMovies(movies) {
  const filtrados = movies.filter(
    movie => movie.rating >= 4.5 && movie.year > 2000
  );
  filtrados.forEach(movie => {
    console.log(`${movie.title} (${movie.year}) - Nota: ${movie.rating}`);
  });
}

showMovies(movies);
