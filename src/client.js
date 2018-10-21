import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '373dad3f278b7d2736fdba9167d541f6';
export const imageBaseUrl = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

export const findMovies = (query, page) => {
  const url = `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
  return axios.get(url);
}