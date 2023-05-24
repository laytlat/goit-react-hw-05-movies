import { useEffect, useState } from 'react';
import { getTrendingsFromAPI } from 'utils/GetDataFromAPI';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //НУжен реф, а то много запросов( 3 запроса на проде)
  useEffect(() => {
    console.log('Fetch in useEffect');
    getTrendingsFromAPI().then(data => setTrendingMovies(data.results));
  }, []);
  return (
    <ul>
      {trendingMovies.map(movie => {
        // console.log(movie);
        return <li key={movie.id}>{movie.title ?? movie.name}</li>;
      })}
    </ul>
  );
}
