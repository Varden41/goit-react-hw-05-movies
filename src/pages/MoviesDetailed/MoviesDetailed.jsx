import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchChosenMovie } from 'Api/tmdb';
import styles from './MoviesDetailed.module.css';
import defaultPicture from 'DefaultPicture/default-movie.jpg';
function MoviesDetailed() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    try {
      async function chosenMovie() {
        const results = await fetchChosenMovie(movieId);
        setMovie(results);
      }
      chosenMovie();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  return (
    <div>
      <Link state={{ from: location }} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <div className={styles.div}>
        {movie ? (
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : defaultPicture
            }
            alt={movie.title}
            height="100%"
            width="100%"
          />
        ) : (
          <></>
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
      <div className={styles.divInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link state={{ from: location.state?.from }} to={`cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={{ from: location.state?.from }} to={`reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default MoviesDetailed;
