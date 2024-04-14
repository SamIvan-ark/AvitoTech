import qs from 'qs';
import { useEffect, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
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
      <div className="bg-dark flex-column h-100 d-flex ps-4 pe-4 pb-5">
        <SearchBar searchHandler={handleSearchParametersChange} />
        <MoviesList movies={movieByName ? movieByName.docs : listOfMovies.docs} />
        <div className="d-flex justify-content-around">
          <Button
            className={page === '1' ? 'invisible' : ''}
            onClick={() => handleSearchParametersChange({ page: page <= 1 ? 1 : +page - 1 })}
            type="button"
            variant="primary"
          >
            <ArrowLeft />
          </Button>
          <Button
            className={page === listOfMovies.pages ? 'invisible' : ''}
            onClick={() => handleSearchParametersChange({
              page: page >= listOfMovies.pages ? page : +page + 1,
            })}
            type="button"
            variant="primary"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    );
};

export default SearchPage;
