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

  //   console.log(actors);

  return (
    <CastList>
      {actors.map(({ id, profile_path, name }) => (
        <CastItem key={id}>
          <SmallThumb>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : imagePlaceholder
              }
              alt={name}
            />
          </SmallThumb>
          <p>{name}</p>
        </CastItem>
      ))}
    </CastList>
  );
}

export default Cast;
