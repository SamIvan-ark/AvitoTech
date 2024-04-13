import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => (
  <Row className="m-3 justify-content-center">
    {movies.map((movie) => (
      <Col key={movie.id} lg={4} md={5} sm={6} xl={2} xs={12}>
        <Card data-bs-theme="dark">
          <Card.Img src={movie.poster.previewUrl} variant="top" />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Link to={`movie/${movie.id}`}>На страницу фильма</Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default MoviesList;
