import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/api';
import { profileImagePlaceholder } from 'services/imagePlaceholder';
import { SmallThumb, CastList, CastItem, ProfileImage } from './Cast.styled';

function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    API.getFilmCredits(movieId).then(team => {
      setActors([...team.cast]);
    });
  }, [movieId]);

  return (
    <CastList>
      {actors.map(({ id, profile_path, name }) => (
        <CastItem key={id}>
          <SmallThumb>
            <ProfileImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : profileImagePlaceholder
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
