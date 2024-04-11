import {
  Button,
  Carousel, Col, Container, Row,
} from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MoviePage = () => {
  const filmData = useLoaderData();
  const navigate = useNavigate();

  return (
    <Container className="bg-dark text-light p-4" fluid>
      <Button onClick={() => navigate(-1)} variant="secondary">Назад</Button>
      <Row>
        <Col>
          <h1>{filmData.name}</h1>
          <p>{filmData.description}</p>
          <h3>
            Рейтинг:
            {filmData.rating.imdb}
          </h3>
          <h3>Актёры:</h3>
          <Carousel>
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
          </Carousel>
          <h3>Сезоны и серии:</h3>
          {/* Разместите информацию о сезонах и сериях с использованием пагинации */}
          {/* Разместите отзывы пользователей с использованием пагинации */}
          {/* Разместите постеры с использованием карусели */}
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
