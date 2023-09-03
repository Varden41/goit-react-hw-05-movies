import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchedMovies } from 'Api/tmdb';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

function Movies() {
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const searchQuery = searchParams.get('name');
  const queryUpdate = name => {
    setSearchParams({ name });
  };

  useEffect(() => {
    if (!searchQuery) return;
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

  return (
    <div>
      <SearchForm queryUpdate={queryUpdate} />
      {status === 'idle' && <div>Fill search field!</div>}
      {status === 'rejected' && <div>Nothing found, sorry</div>}
      {status === 'loaded' && <MoviesList movies={movies} />}
    </div>
  );
}

export default Movies;
