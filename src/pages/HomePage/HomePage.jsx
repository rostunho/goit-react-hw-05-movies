import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import API from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './HomePage.styled';

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
      <MoviesList movies={movies} />
    </HomeContainer>
  );
}
export default HomePage;
