import axios from 'axios';

const baseUrl = 'https://api.kinopoisk.dev';

const defaultParams = {
  method: 'get',
  headers: {
    'X-API-KEY': process.env.TOKEN,
    'Content-Type': 'application/json',
  },
};

export const getMoviesList = async (route, params = {}) => {
  const response = await axios.get([baseUrl, 'v1.4', route].join('/'), { ...defaultParams, params });
  return response.data;
};

export const getAcceptableValuesRange = async (route, params) => {
  const response = await axios.get([baseUrl, 'v1', route].join('/'), { ...defaultParams, params });
  return response.data;
};
