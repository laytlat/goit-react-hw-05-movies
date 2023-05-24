import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const options = {
  params: {
    api_key: 'e5d9357826e56bc41f11884e07241fb9',
    q: ``,
  },
};

export async function getTrendingsFromAPI(queryName) {
  options.params.q = queryName;
  options.params.page = 1;
  const data = await axios
    .get(BASE_URL, options)
    .then(response => response.data);
  console.log('fetch');
  return data;
}
