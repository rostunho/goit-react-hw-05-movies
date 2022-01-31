import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  MovieDetailContainer,
  GoBackButton,
  Poster,
  Thumb,
  Description,
  MovieDetailList,
  MovieDetailItem,
  NavLink,
} from './MovieDetailPage.styled';

import API from 'services/api';
import { imagePlaceholder } from 'services/imagePlaceholder';

function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const [fromLocation, setFromLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setFromLocation(location.state?.from || '/');
    API.fetchFullFilmDetails(movieId).then(newFilm => {
      setFilm(newFilm);
    });
  }, [movieId]);

  const backOnClick = () => {
    navigate(fromLocation);
  };

  const { poster_path, title, release_date, vote_average, overview, genres } =
    film;
  return (
    <MovieDetailContainer>
      <GoBackButton type="button" onClick={backOnClick}>
        Go back
      </GoBackButton>
      <Poster>
        <Thumb>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imagePlaceholder
            }
            alt={title}
          />
        </Thumb>
        <Description>
          <h2>
            {title}
            {release_date
              ? ` (${new Date(Date.parse(release_date)).getFullYear()})`
              : null}
          </h2>
          <p>User score : {vote_average * 10} % </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>
            {genres &&
              genres.map(genre => {
                return `${genre.name} `;
              })}
          </p>
        </Description>
      </Poster>
      <MovieDetailList>
        Additional information
        <MovieDetailItem>
          <NavLink to="cast">Cast</NavLink>
        </MovieDetailItem>
        <MovieDetailItem>
          <NavLink to="reviews">Reviews</NavLink>
        </MovieDetailItem>
      </MovieDetailList>
      <Outlet />
    </MovieDetailContainer>
  );
}

export default MovieDetailsPage;
