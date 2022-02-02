import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import API from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import {
  SearchForm,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './MoviesPage.styled';

function MoviesPages() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieToSearch = searchParams.get('query');

  useEffect(() => {
    if (!movieToSearch) return;
    API.fetchFilmByName(movieToSearch)
      .then(films =>
        films.results.length !== 0
          ? setMovies([...films.results])
          : alert('Movie not found'),
      )
      .catch(alert);
  }, [movieToSearch]);

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a movie name');
      return;
    }

    setSearchParams({ query });
    setQuery('');
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" value={query} onChange={handleInput} />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </SearchContainer>
  );
}

export default MoviesPages;
