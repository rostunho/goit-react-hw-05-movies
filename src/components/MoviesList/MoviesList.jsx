// import { Link } from 'react-router-dom';
import { MovieList, MovieItem, MovieLink } from './MovieList.styled';

function MoviesList({ movies, location }) {
  return (
    <MovieList>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
}

export default MoviesList;
