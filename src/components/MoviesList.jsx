import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import defaultMovieCover from '../assets/defaultMovieCover.jpg';

const MoviesList = ({ movies }) => (
  <Row className="gap-3 m-3 justify-content-center">
    {movies.map((movie) => (
      <Col key={movie.id} lg={5} md={5} sm={10} xl={3} xxl={2}>
        <Card data-bs-theme="dark">
          <Link to={`movie/${movie.id}`}>
            <Card.Img
              src={movie.poster.previewUrl ?? defaultMovieCover}
              style={{ width: '100%', height: 'auto' }}
              variant="top"
            />
          </Link>
          <Card.Body>
            <Card.Title className="fs-4 text-center">{movie.name}</Card.Title>
            <p className="fs-6 text-center">{movie.shortDescription}</p>
            <Link className="center text-reset" to={`movie/${movie.id}`}>На страницу фильма</Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default MoviesList;
