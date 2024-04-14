import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posters = ({ moviesList }) => {
  if (moviesList.length === 0) {
    return (
      <h3>Нет похожих фильмов</h3>
    );
  }
  console.log(moviesList);
  return (
    <Row>
      <Col className="text-center">
        <h3>Похожие фильмы:</h3>
        <div className="ms-auto me-auto mt-4">
          <Carousel controls={false} interval={2000}>
            {moviesList.map((movie) => (
              <Carousel.Item key={movie.id}>
                <Row>
                  <Col className="mx-auto" style={{ maxWidth: '500px' }}>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        alt={movie.name}
                        className="d-block w-100"
                        src={movie.poster.url}
                        style={{ objectFit: 'cover', height: '700px' }}
                      />
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default Posters;
