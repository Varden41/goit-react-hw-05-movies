import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from 'Api/tmdb';

function Movies() {
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const searchQuery = searchParams.get('name') ?? '';
  const queryUpdate = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function fetchFoundMovies() {
      const results = await fetchSearchedMovies(searchQuery);

      if (results.length === 0) {
        return setStatus('rejected');
      }
      setMovies(results);
      setStatus('loaded');
    }
    if (searchQuery === '') {
      return;
    }
    fetchFoundMovies();
  }, [searchQuery]);

  const onHandleSubmin = async e => {
    const target = e.currentTarget.search.value.trim();
    e.preventDefault();
    queryUpdate(target);
    // resetForm();
  };
  return (
    <div>
      <form onSubmit={onHandleSubmin}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search"
        />
        <button>Search</button>
      </form>
      {status === 'idle' && <div>Fill search field!</div>}
      {status === 'rejected' && <div>Nothing found, sorry</div>}
      {status === 'loaded' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movies;
