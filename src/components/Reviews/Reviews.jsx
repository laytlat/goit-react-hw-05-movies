import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/GetDataFromAPI';

export function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetails(movieId, 'reviews').then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(review => {
          const { author, content } = review;
          return (
            <li key={author}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      {reviews.length === 0 && <h4>There is no overviews</h4>}
    </ul>
  );
}
