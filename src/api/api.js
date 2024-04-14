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

export const getMoviesByName = async (route, params = {}) => {
  const response = await axios.get([baseUrl, 'v1.4', 'movie', route].join('/'), { ...defaultParams, params });
  return response.data;
};

export const getAcceptableValuesRange = async (route, params) => {
  const response = await axios.get([baseUrl, 'v1', route].join('/'), { ...defaultParams, params });
  return response.data;
};

export const getSeasons = async (params) => {
  const response = await axios.get([baseUrl, 'v1.4', 'season'].join('/'), { ...defaultParams, params });
  return response.data;
};

export const getStaff = async (params) => {
  const response = await axios.get([baseUrl, 'v1.4', 'person'].join('/'), {
    ...defaultParams,
    params,
    paramsSerializer: {
      indexes: null,
    },
  });
  return response.data;
};

export const getReviews = async (params) => {
  const response = await axios.get([baseUrl, 'v1.4', 'review'].join('/'), { ...defaultParams, params });
  return response.data;
};
