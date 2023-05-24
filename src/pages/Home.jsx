import { useEffect, useState } from 'react';
import { getTrendingsFromAPI } from 'utils/GetDataFromAPI';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //НУжен реф, а то много запросов(сейчас их 4), уже 6 но походу барахлит пак
  useEffect(() => {
    getTrendingsFromAPI().then(data => setTrendingMovies(data.results));
  }, []);
  getTrendingsFromAPI();
  return (
    <ul>
      {trendingMovies.map(movie => {
        console.log(movie);
        return <li key={movie.id}>{movie.title ?? movie.name}</li>;
      })}
    </ul>
  );
}
