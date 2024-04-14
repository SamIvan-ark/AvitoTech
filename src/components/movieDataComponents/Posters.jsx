import { useEffect } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

import { getPosters } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';

const Posters = ({ id }) => {
  const { data: posters, isLoading, fetchData } = useApi(getPosters);

  useEffect(() => {
    fetchData({
      movieId: id,
      type: ['wallpaper', 'promo', 'screenshot'],
      limit: 100,
    });
  }, []);

  if (isLoading || !posters) {
    return <CenteredSpinner />;
  }
  if (posters.pages === 0) {
    return (
      <h3>Нет постеров</h3>
    );
  }
  return (
    <Row>
      <Col className="text-center">
        <h3>Постеры:</h3>
        <div className="ms-auto me-auto mt-4">
          <Carousel controls={false} interval={2000}>
            {posters.docs.map((poster) => (
              <Carousel.Item key={poster.id}>
                <Row>
                  <Col className="mx-auto" style={{ maxWidth: '500px' }}>
                    <img
                      alt={poster.name}
                      className="d-block w-100"
                      src={poster.url}
                      style={{ objectFit: 'cover', height: '500px' }}
                    />
                  </Col>
                </Row>
                <Carousel.Caption className="text-light">
                  <h3>{poster.name}</h3>
                  <p>{poster.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default Posters;
