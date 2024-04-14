import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

import { getPosters } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';

const Posters = ({ id }) => {
  const { data: posters, isLoading, fetchData } = useApi(getPosters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData({
      movieId: id,
      type: ['wallpaper', 'promo', 'screenshot'],
      page,
    });
  }, [page]);

  if (isLoading || !posters) {
    return <CenteredSpinner />;
  }
  if (posters.pages === 0) {
    return (
      <h3>Нет постеров</h3>
    );
  }
  return (
    <>
      <h3>Постеры:</h3>
      <Carousel className="w-25">
        {posters.docs
          .map((poster) => (
            <Carousel.Item key={poster.id}>
              <img
                alt={poster.name}
                className="d-block w-100"
                src={poster.url}
              />
              <Carousel.Caption>
                <h3>{poster.name}</h3>
                <p>{poster.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
      {(page === 1 && posters.docs.length < 10) ? null : (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)} type="button">-</button>
          <button disabled={page === posters.pages} onClick={() => setPage(page + 1)} type="button">+</button>
        </>
      )}
    </>
  );
};

export default Posters;
