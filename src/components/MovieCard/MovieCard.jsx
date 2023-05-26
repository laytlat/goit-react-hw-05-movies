import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AdditionalInfo,
  MovieInfo,
  MoviePoster,
  StyledMovieCard,
} from './MovieCard.styled';

export function MovieCard({ image, title, description, genres, rating }) {
  const genresList = genres?.flatMap(genre => genre.name);
  const userScore = Math.round(rating * 10);
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <StyledMovieCard>
      <MoviePoster src={`${imgURL}${image}`} alt={title} />
      <MovieInfo>
        <h2>{title}</h2>
        <p>{`User Score: ${userScore}%`}</p>
        <div>
          {' '}
          <h3>Overview</h3>
          <p>{description}</p>
        </div>
        <div>
          {' '}
          <h3>Genres</h3>
          <p>{genresList?.join(', ')}</p>
        </div>
        <h4>Additional information</h4>
        <AdditionalInfo>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </AdditionalInfo>
      </MovieInfo>
    </StyledMovieCard>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  genres: PropTypes.array,
  rating: PropTypes.number,
};
