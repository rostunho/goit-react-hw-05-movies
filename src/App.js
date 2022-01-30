import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import HomePage from 'pages/Home/HomePage';
import MoviesPages from 'pages/Movies/MoviesPages';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import './App.css';

// const test = API.fetchTrendingMovie().then(resp => {
//   console.log(resp.results);
// });

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPages />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
