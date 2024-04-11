import axios from 'axios';

const baseUrl = 'https://api.kinopoisk.dev/v1.4';

const defaultParams = {
  method: 'get',
  headers: {
    'X-API-KEY': process.env.TOKEN,
    'Content-Type': 'application/json',
  },
};

export const getMoviesList = async (route, params = {}) => {
  const response = await axios.get([baseUrl, route].join('/'), { ...defaultParams, params });
  return response.data;
};
