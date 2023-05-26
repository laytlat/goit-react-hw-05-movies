import ListItem from 'components/ListItem/ListItem';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'utils/GetDataFromAPI';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const query = searchParams.get('query');
  const firstRender = useRef(true);

  useEffect(() => {
    if (query && query !== '' && firstRender.current) {
      getMovieByName(query.trim()).then(data => setMovies(data.results));
      firstRender.current = false;
    }
  }, [query]);

  const onInputChange = e => {
    if (firstRender.current) {
      firstRender.current = false;
    }
    const { value } = e.currentTarget;
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: value });
  };

  const onFormSubmit = e => {
    if (e) {
      e.preventDefault();
    }

    if (query.trim() === '') {
      return;
    }
    getMovieByName(query.trim()).then(data => setMovies(data.results));
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={onInputChange} value={query ?? ''} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <ListItem
              propState={{ from: location }}
              path={`${id}`}
              key={id}
              id={id}
              title={title}
              name={name}
            />
          );
        })}
      </ul>
    </>
  );
}
