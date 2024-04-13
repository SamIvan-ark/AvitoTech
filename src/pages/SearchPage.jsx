import qs from 'qs';
import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getMoviesByName, getMoviesList } from '../api/api';
import CenteredSpinner from '../components/CenteredSpinner';
import MoviesList from '../components/MoviesList';
import { SearchBar } from '../components/SearchBar';
import useApi from '../hooks/useApi';
import { appendQueryParams } from '../utils/updateSearchParams';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data: listOfMovies,
    error: listOfMoviesError,
    isLoading: isListOfMoviesLoading,
    fetchData: fetchListOfMovies,
  } = useApi(getMoviesList);
  const {
    data: movieByName,
  } = useApi(getMoviesByName);

  const searchParams = useMemo(() => qs.parse(location.search.replace('?', '')), [location]);
  const { page = 1 } = searchParams;

  const handleSearchParametersChange = (newParams) => navigate({
    search: appendQueryParams(searchParams, newParams),
  });

  useEffect(() => {
    if (searchParams.query) {
      fetchListOfMovies('movie/search', searchParams);
    } else {
      fetchListOfMovies('movie', searchParams);
    }
  }, [searchParams]);

  if (listOfMoviesError) {
    return (
      <p>
        Error:
        {listOfMoviesError.message}
      </p>
    );
  }

  return !listOfMovies || isListOfMoviesLoading
    ? (<div className="bg-dark h-100"><CenteredSpinner /></div>)
    : (
      <div className="bg-dark flex-column h-100 d-flex">
        <SearchBar searchHandler={handleSearchParametersChange} />
        <MoviesList movies={movieByName ? movieByName.docs : listOfMovies.docs} />
        <button onClick={() => handleSearchParametersChange({ page: page <= 1 ? 1 : +page - 1 })} type="button">а раньше что</button>
        <button onClick={() => handleSearchParametersChange({ page: page >= listOfMovies.pages ? page : +page + 1 })} type="button">а дальше что</button>
      </div>
    );
};

export default SearchPage;
