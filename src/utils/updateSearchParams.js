import qs from 'qs';

const updateQueryParams = (params, newParams) => {
  const query = qs.parse(params);
  return qs.stringify({ ...query, ...newParams });
};

export default updateQueryParams;
