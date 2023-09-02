import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchChosenMovie } from 'Api/tmdb';

function MoviesDetailed() {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    try {
      async function chosenMovie() {
        const results = await fetchChosenMovie(params.movieId);
        setMovie(results);
        console.log(results);
      }
      chosenMovie();
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  return (
    <div>
      <Link state={{ from: location }} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <div>
        {movie && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
        <div>
          <h1>
            {movie && movie.title}({movie && movie.release_date.slice(0, 4)})
          </h1>
          <p>
            Userscore:{' '}
            {movie &&
              Math.round((movie.vote_average + Number.EPSILON) * 10) + ' %'}
          </p>
          <h2>Overviews</h2>
          <p>{movie && movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie && movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MoviesDetailed;
