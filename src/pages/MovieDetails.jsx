import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/GetDataFromAPI';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);

  const { poster_path, title, name, overview, genres, vote_average } = movie;

  return (
    <>
      <Link to={backLink.current}>Go back</Link>
      <MovieCard
        image={poster_path}
        title={title ?? name}
        description={overview}
        genres={genres}
        rating={vote_average}
      ></MovieCard>

      <Outlet />
    </>
  );
}
