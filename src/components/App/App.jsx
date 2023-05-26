import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails';
import { MovieReviews } from 'components/Reviews/Reviews';
import { MovieCast } from 'components/Cast/Cast';

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
