import ListItem from 'components/ListItem/ListItem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingsFromAPI } from 'utils/GetDataFromAPI';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingsFromAPI().then(data => setTrendingMovies(data.results));
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => {
          const { id, title, name } = movie;
          return (
            <ListItem
              propState={{ from: location }}
              path={`movies/${id}`}
              key={id}
              id={id}
              title={title}
              name={name}
            />
          );
        })}
      </ul>
    </div>
  );
}
