import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from 'pages/services/api';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchTrendingMovies()
      .then(data => {
        setMovies([...data.results]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // console.log(movies);

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default HomePage;
