import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api/tmdb';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      async function fetchTrendingMovies() {
        const results = await fetchMovies();
        setMovies(results);
      }
      fetchTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <MoviesList movies={movies} />;
}

export default Home;
