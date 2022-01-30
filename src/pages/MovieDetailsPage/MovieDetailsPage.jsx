import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../services/api';

function MovieDetailsPage() {
  const [film, setFilm] = useState({});

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    API.fetchFullFilmDetails(movieId).then(newFilm => {
      //   console.log(newFilm);
      setFilm(newFilm);
    });
  }, [movieId]);

  console.dir(film);

  return <h1>This is {film.original_title} </h1>;
}

export default MovieDetailsPage;
