import { useFormik } from 'formik';
import qs from 'qs';
import { useMemo } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

import { replaceQueryParams } from '../../utils/updateSearchParams';

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = useMemo(() => qs.parse(location.search.replace('?', '')), [location]);
  const { limit = 10, query = '' } = searchParams;

  const formik = useFormik({
    initialValues: { movieTitle: query },

    onSubmit: ({ movieTitle }) => {
      const movieTitleSearchParams = movieTitle ? { query: movieTitle } : {};
      navigate({
        search: replaceQueryParams({ limit, ...movieTitleSearchParams }),
      });
    },
  });
  return (
    <Form className="d-flex col-6" onSubmit={formik.handleSubmit}>
      <Form.Control
        aria-label="Введите название фильма"
        autoComplete="movieTitle"
        id="movieTitle"
        name="movieTitle"
        onChange={formik.handleChange}
        placeholder="Введите название фильма"
        type="search"
        value={formik.values.movieTitle}
      />
      <Button
        type="submit"
        variant="outline-light"
      >
        Найти!
      </Button>
    </Form>
  );
};

export default SearchForm;
