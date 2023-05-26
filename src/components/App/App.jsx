import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import MovieDetails from 'pages/MovieDetails';
// import MovieReviews from 'components/Reviews/Reviews';
// import MovieCast from 'components/Cast/Cast';

//const Home = lazy(() => import("../pages/Home"));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieReviews = lazy(() => import('../Reviews/Reviews'));
const MovieCast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
