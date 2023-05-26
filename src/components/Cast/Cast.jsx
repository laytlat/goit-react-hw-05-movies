import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/GetDataFromAPI';
import { ActorPhoto, ActorsList } from './Cast.styled';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const imgURL = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    getMovieDetails(movieId, 'credits').then(data => setCast(data.cast));
  }, [movieId]);
  return (
    <ActorsList>
      {cast.map(actor => {
        const { cast_id, profile_path, character, name } = actor;
        return (
          <li key={cast_id}>
            <ActorPhoto src={`${imgURL}${profile_path}`} alt={character} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ActorsList>
  );
}
