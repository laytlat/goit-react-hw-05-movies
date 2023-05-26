import axios from 'axios';

const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/day';
const MOVIE_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie/';
const MOVIE_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie?query=';
const options = {
  params: {
    api_key: 'e5d9357826e56bc41f11884e07241fb9',
  },
};

export async function getTrendingsFromAPI() {
  const data = await axios
    .get(TRENDING_URL, options)
    .then(response => response.data);
  return data;
}

export async function getMovieById(movieId) {
  const data = await axios
    .get(MOVIE_SEARCH_BY_ID + movieId, options)
    .then(response => response.data);
  return data;
}

export async function getMovieByName(movieName) {
  const data = await axios
    .get(MOVIE_SEARCH_BY_NAME + movieName, options)
    .then(response => response.data);
  return data;
}

export async function getMovieDetails(movieId, path) {
  const data = await axios
    .get(MOVIE_SEARCH_BY_ID + movieId + `/${path}`, options)
    .then(response => response.data);
  return data;
}
