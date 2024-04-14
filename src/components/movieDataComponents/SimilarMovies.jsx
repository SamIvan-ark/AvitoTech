import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posters = ({ moviesList }) => {
  if (moviesList.length === 0) {
    return (
      <h3>Нет похожих фильмов</h3>
    );
  }
  console.log(moviesList);
  return (
    <>
      <h3>Похожие фильмы:</h3>
      <Carousel className="w-25">
        {moviesList
          .map((movie) => (
            <Carousel.Item key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  alt={movie.name}
                  className="d-block w-100"
                  src={movie.poster.url}
                />
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default Posters;
