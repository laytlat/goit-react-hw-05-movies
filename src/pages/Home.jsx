import { ListItem } from 'components/ListItem/ListItem';
import { useEffect, useState } from 'react';
import { getTrendingsFromAPI } from 'utils/GetDataFromAPI';

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingsFromAPI().then(data => setTrendingMovies(data.results));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          const { id, title, name } = movie;
          return <ListItem key={id} id={id} title={title} name={name} />;
        })}
      </ul>
    </div>
  );
}
