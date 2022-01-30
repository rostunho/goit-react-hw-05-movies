import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { Poster, Thumb, Description } from './MovieDetailPage.styled';

import API from 'services/api';
import imagePlaceholder from 'services/imagePlaceholder';

function MovieDetailsPage() {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  // console.log(movieId);

  // const imagePlaceholder =
  //   'https://st4.depositphotos.com/14953852/24651/v/600/depositphotos_246517344-stock-illustration-image-available-icon-vector-flat.jpg';

  useEffect(() => {
    API.fetchFullFilmDetails(movieId).then(newFilm => {
      //   console.log(newFilm);
      setFilm(newFilm);
    });
  }, [movieId]);

  // console.dir(film);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    film;
  // return <h1>This is {film.original_title} </h1>;
  return (
    <>
      <button type="button">Go back</button>
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
      <ul>
        Additional information
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
