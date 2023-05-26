import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'utils/GetDataFromAPI';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    getMovieById(movieId).then(data => setMovie(data));
  }, [movieId]);

  const { poster_path, title, name, overview, genres, vote_average } = movie;

  return (
    <>
      <MovieCard
        image={poster_path}
        title={title ?? name}
        description={overview}
        genres={genres}
        rating={vote_average}
      ></MovieCard>
      <div>
        <h4>Additional information</h4>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
}
