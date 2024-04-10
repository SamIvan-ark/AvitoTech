import { Card, Col, Row } from 'react-bootstrap';

const MovieList = ({ movies }) => (
  <Row className="m-3 justify-content-center">
    {movies.map((movie) => (
      <Col key={movie.id} lg={4} md={5} sm={6} xl={2} xs={12}>
        <Card>
          <Card.Img src={movie.poster.previewUrl} variant="top" />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Link href={`/movie/${movie.id}`}>View Details</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default MovieList;
