import qs from 'qs';

export const appendQueryParams = (params, newParams) => {
  const query = qs.parse(params);
  return qs.stringify({ ...query, ...newParams });
};

export const replaceQueryParams = (newParams) => qs.stringify({ ...newParams });
