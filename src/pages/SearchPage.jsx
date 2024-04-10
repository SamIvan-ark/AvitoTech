import qs from 'qs';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getMoviesList } from '../api/api';
import CenteredSpinner from '../components/CenteredSpinner';
import MovieList from '../components/MovieList';
import { SearchBar } from '../components/searchBar';
import useApi from '../hooks/useApi';
import updateQueryParams from '../utils/updateSearchParams';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data, error, isLoading, fetchData,
  } = useApi(getMoviesList);

  const searchParams = useMemo(() => qs.parse(location.search.replace('?', '')), [location]);
  const { page = 1 } = searchParams;

  const handleSearchParametersChange = (newParams) => navigate({
    search: updateQueryParams(searchParams, newParams),
  });

  useEffect(() => {
    fetchData('movie', searchParams);
  }, [searchParams]);

  if (error) {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return !data || isLoading
    ? (<div className="h-100"><CenteredSpinner /></div>)
    : (
      <div className="flex-column h-100 d-flex">
        <SearchBar searchHandler={handleSearchParametersChange} />
        <MovieList movies={data.docs} />
        <button onClick={() => handleSearchParametersChange({ page: page <= 1 ? 1 : +page - 1 })} type="button">а раньше что</button>
        <button onClick={() => handleSearchParametersChange({ page: page >= data.pages ? page : +page + 1 })} type="button">а дальше что</button>
      </div>
    );
};

export default SearchPage;
