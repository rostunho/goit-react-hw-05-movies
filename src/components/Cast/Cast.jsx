import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';
import imagePlaceholder from 'services/imagePlaceholder';
import { SmallThumb, CastList, CastItem } from './Cast.styled';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  //   console.log(movieId);

  useEffect(() => {
    API.getFilmCredits(movieId).then(team => {
      setActors([...team.cast]);
    });
  }, [movieId]);

  console.log(actors);

  return (
    <CastList>
      {actors.map(actor => (
        <CastItem key={actor.id}>
          <SmallThumb>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : imagePlaceholder
              }
              alt={actor.name}
            />
          </SmallThumb>
          <p>{actor.name}</p>
        </CastItem>
      ))}
    </CastList>
  );
}

export default Cast;
