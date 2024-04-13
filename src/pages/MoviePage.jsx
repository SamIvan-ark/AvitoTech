import {
  Button,
  // Carousel,
  Container,
} from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { ActorsList, SeasonsAndSeries } from '../components/movieDataComponents';

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
            {`Рейтинг: ${filmData.rating.imdb}`}
          </h3>
          <div>
            <ActorsList id={filmData.id} />
          </div>
          <div>
            <SeasonsAndSeries id={filmData.id} />
          </div>
          {/* <Carousel className="w-25">
            {filmData.persons.map((actor) => (
              <Carousel.Item key={actor.id}>
                <img
                  alt={actor.name}
                  className="d-block w-100"
                  src={actor.photo}
                />
                <Carousel.Caption>
                  <h3>{actor.name}</h3>
                  <p>{actor.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel> */}
          {/* Разместите информацию о сезонах и сериях с использованием пагинации */}
          {/* Разместите отзывы пользователей с использованием пагинации */}
          {/* Разместите постеры с использованием карусели */}
        </div>
      </div>
    </Container>
  );
};

export default MoviePage;
