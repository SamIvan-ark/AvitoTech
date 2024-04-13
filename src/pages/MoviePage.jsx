import {
  Button,
  // Carousel,
  Container,
} from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MoviePage = () => {
  const filmData = useLoaderData();
  const navigate = useNavigate();

  const filteredStaff = filmData.persons
    .filter(({ profession, enProfession }) => profession === 'актеры' || enProfession === 'actor');

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
          <h3>Актёры:</h3>
          <div className="border d-flex flex-wrap">
            {filteredStaff.map((actor) => {
              const name = actor.name ?? actor.enName;
              return (
                <div className="card mb-3" key={actor.id} style={{ minWidth: '250px', maxWidth: '400px' }}>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img alt={`Фотография актера ${name}`} className="img-fluid rounded-start" src={actor.photo} />
                    </div>
                    <div className="dark col-md-6">
                      <div className="card-body">
                        <p className="card-title fs-3">{name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
          <h3>Сезоны и серии:</h3>
          {/* Разместите информацию о сезонах и сериях с использованием пагинации */}
          {/* Разместите отзывы пользователей с использованием пагинации */}
          {/* Разместите постеры с использованием карусели */}
        </div>
      </div>
    </Container>
  );
};

export default MoviePage;
