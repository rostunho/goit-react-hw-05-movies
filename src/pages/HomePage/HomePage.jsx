import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import API from 'services/api';
import {
  HomeLink,
  HomeContainer,
  HomeTitle,
  HomeList,
  HomeItem,
} from './HomePage.styled';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies()
      .then(data => {
        setMovies([...data.results]);
      })
      .catch(alert);
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      <HomeList>
        {movies.map(({ id, title }) => (
          <HomeItem key={id}>
            <HomeLink to={`/movies/${id}`}>{title}</HomeLink>
          </HomeItem>
        ))}
      </HomeList>
    </HomeContainer>
  );
}
export default HomePage;
