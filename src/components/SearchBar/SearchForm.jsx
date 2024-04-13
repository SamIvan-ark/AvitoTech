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
    <Form className="col-10" onSubmit={formik.handleSubmit}>
      <Form.Group className="form-floating">
        <Form.Control
          autoComplete="movieTitle"
          id="movieTitle"
          name="movieTitle"
          onChange={formik.handleChange}
          placeholder="Введите название фильма"
          type="text"
          value={formik.values.movieTitle}
        />
        <Form.Label htmlFor="movieTitle">Введите название фильма</Form.Label>
        <Button
          className="w-100"
          type="submit"
          variant="outline-secondary"
        >
          Найти!
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
