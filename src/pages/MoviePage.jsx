import {
  Button,
  Container,
} from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

import {
  ActorsList, Posters, Reviews, SeasonsAndSeries,
  SimilarMovies,
} from '../components/movieDataComponents';

const MoviePage = () => {
  const filmData = useLoaderData();
  const navigate = useNavigate();

  return (
    <Container className="bg-dark text-light p-4" fluid>
      <Button onClick={() => navigate(-1)} variant="secondary">Назад</Button>
      <div className="row mt-1">
        <div className="d-flex justify-content-end flex-column w-100">
          <h1 className="w-50">{filmData.name}</h1>
          <p className="w-50">{filmData.description}</p>
          <h3>
            {`Рейтинг IMDB: ${filmData.rating.imdb}`}
            <br />
            {`Рейтинг КиноПоиска: ${filmData.rating.kp}`}
          </h3>
          <div>
            <ActorsList id={filmData.id} />
          </div>
          <div>
            <SeasonsAndSeries id={filmData.id} />
          </div>
          <div>
            <Reviews id={filmData.id} />
          </div>
          <div>
            <Posters id={filmData.id} />
          </div>
          <div>
            <SimilarMovies moviesList={filmData.similarMovies} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MoviePage;
