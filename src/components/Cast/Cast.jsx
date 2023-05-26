import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/GetDataFromAPI';

export function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    getMovieDetails(movieId, 'credits').then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <ul>
      {cast.map(actor => {
        const { cast_id, profile_path, character, name } = actor;
        return (
          <li key={cast_id}>
            <img src={`${imgURL}${profile_path}`} alt={character} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
