// import { Link } from 'react-router-dom';
import { MovieList, MovieItem, MovieLink } from './MovieList.styled';

function MoviesList({ movies, location }) {
  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
}

export default MoviesList;
