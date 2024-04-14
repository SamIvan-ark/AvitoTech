import {
  Button,
  Col,
  Row,
} from 'react-bootstrap';
import { ScrollRestoration, useLoaderData, useNavigate } from 'react-router-dom';

import {
  ActorsList, Posters, Reviews, SeasonsAndSeries,
  SimilarMovies,
} from '../components/movieDataComponents';

const MoviePage = () => {
  const filmData = useLoaderData();
  const navigate = useNavigate();
  return (
    <div>
      <Row className="bg-dark text-light m-4">
        <Col className="d-flex flex-column align-items-start justify-content-start" md={6} xs={12}>
          <Button className="mb-3" onClick={() => navigate(-1)} variant="secondary">Назад</Button>
          <img alt={filmData.name} className="mb-3 ms-auto me-auto" src={filmData.poster.url} style={{ maxWidth: '90%', overflow: 'hidden' }} />
        </Col>
        <Col className="d-flex flex-column align-items-start justify-content-start" md={6} xs={12}>
          <h1>{filmData.name}</h1>
          <p className="fs-5">{filmData.description}</p>
          <h3>
            {filmData.rating.imdb === 0 ? null : `Рейтинг IMDB: ${filmData.rating.imdb}`}
            <br />
            {filmData.rating.kp === 0 ? null : `Рейтинг КиноПоиска: ${filmData.rating.kp.toFixed(1)}`}
          </h3>
        </Col>
      </Row>
      <Col className="mt-2 me-4 ms-4 text-light col">
        <div className="d-flex justify-content-end flex-column w-100">
          <div className="mb-4 mt-4">
            <ActorsList id={filmData.id} />
          </div>
          <div className="mb-4 mt-4">
            <SeasonsAndSeries id={filmData.id} />
          </div>
          <div className="mb-4 mt-4">
            <Reviews id={filmData.id} />
          </div>
          <div className="mb-4 mt-4">
            <Posters id={filmData.id} />
          </div>
          <div className="mb-4 mt-4">
            <SimilarMovies moviesList={filmData.similarMovies} />
          </div>
        </div>
      </Col>
      <ScrollRestoration />
    </div>
  );
};

export default MoviePage;
