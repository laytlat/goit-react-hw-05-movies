import { ListItem } from 'components/ListItem/ListItem';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from 'utils/GetDataFromAPI';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  useEffect(() => {
    if (query && query !== '') {
      getMovieByName(query.trim()).then(data => setMovies(data.results));
      console.log('TEST');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputChange = e => {
    setSearchParams({ query: e.currentTarget.value });
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
          return <ListItem key={id} id={id} title={title} name={name} />;
        })}
      </ul>
    </>
  );
}
