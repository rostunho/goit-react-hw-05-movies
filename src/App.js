import { Routes, Route } from 'react-router-dom';
import Navigation from 'pages/Navigation';
import HomePage from 'pages/Home/HomePage';
import MoviesPages from 'pages/Movies/Movies';
import './App.css';

// const test = API.fetchTrendingMovie().then(resp => {
//   console.log(resp.results);
// });

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPages />}>
          <Route path=":moviesId element={<MovieDetailsPage/>}"></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
