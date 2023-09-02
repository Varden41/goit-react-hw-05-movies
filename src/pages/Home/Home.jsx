import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'Api/tmdb';

function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetchTrendingMovies() {
        const results = await fetchMovies();
        setMovies(results);
        console.log(results);
      }
      fetchTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </Suspense>
  );
}

export default Home;
