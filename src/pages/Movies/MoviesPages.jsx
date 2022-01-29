import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import API from '../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';

function MoviesPages() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(query);

  // const location = useLocation();
  // const navigation = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieToSearch = searchParams.get('query');
  console.log(movieToSearch);

  useEffect(() => {
    if (!movieToSearch) return;
    API.fetchFilmByName(movieToSearch).then(films => {
      // console.log(films.results);
      setMovies([...films.results]);
    });
  }, [movieToSearch]);

  const handleInput = event => {
    setQuery(event.target.value);
  };

  console.log(movies);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInput}></input>
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}

export default MoviesPages;
