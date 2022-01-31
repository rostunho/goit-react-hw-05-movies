import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AppContainer } from './App.styled';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPages = lazy(() => import('./pages/MoviesPage/MoviesPages'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <Suspense fallback={<div>...LOADING</div>}>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />}></Route>
            <Route path="movies" element={<MoviesPages />}></Route>
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppContainer>
    </Suspense>
  );
}

export default App;

// import Navigation from 'components/Navigation/Navigation';
// import HomePage from 'pages/Home/HomePage';
// import MoviesPages from 'pages/Movies/MoviesPages';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
