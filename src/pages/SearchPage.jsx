import qs from 'qs';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getMoviesList } from '../api/api';
import CenteredSpinner from '../components/CenteredSpinner';
import MovieList from '../components/MovieList';
import useApi from '../hooks/useApi';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data, error, isLoading, fetchData,
  } = useApi(getMoviesList);

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

  return !data || isLoading
    ? (<CenteredSpinner />)
    : (
      <div className="flex-column h-100 d-flex">
        <MovieList movies={data.docs} />
        <div>{data.docs.map((film) => <div key={film.id}>{film.name}</div>)}</div>
        <button onClick={() => navigate({ search: `page=${page <= 1 ? 1 : +page - 1}` })} type="button">а раньше что</button>
        <button onClick={() => navigate({ search: `page=${page >= data.pages ? page : +page + 1}` })} type="button">а дальше что</button>
      </div>
    );
};

export default SearchPage;
