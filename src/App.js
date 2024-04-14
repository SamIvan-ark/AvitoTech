import {
  Route, RouterProvider, createBrowserRouter, createRoutesFromElements,
} from 'react-router-dom';

import { getMoviesList } from './api/api';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      element={<MoviePage />}
      loader={({ params }) => getMoviesList(`movie/${params.id}`)}
      path="movie/:id"
    />,
    <Route
      element={<SearchPage />}
      errorElement={<h1 className="text-light">А ой (страницу ошибки забыли)</h1>}
      path="/"
    />,
  ]),
);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
