import qs from 'qs';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getMoviesList } from '../api/api';
import useApi from '../hooks/useApi';

console.log(process.env);
const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data, error, isLoading, fetchData,
  } = useApi(getMoviesList);

  console.log(data);

  const page = useMemo(() => qs.parse(location.search.replace('?', '')).page ?? 1, [location]);

  useEffect(() => {
    fetchData('movie', { page });
  }, [page]);

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  console.log(page);

  return (
    <>
      {!data || isLoading
        ? (<p>Loading...</p>)
        : <div>{data.docs.map((film) => <div key={film.id}>{film.name}</div>)}</div>}
      ;
      <button onClick={() => navigate({ search: `page=${page <= 1 ? 1 : page - 1}` })} type="button">а раньше что</button>
      <button onClick={() => navigate({ search: `page=${page >= data.pages ? page : page + 1}` })} type="button">а дальше что</button>
    </>
  );
};

export default SearchPage;
