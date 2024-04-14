import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

import { getReviews } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';

const Reviews = ({ id }) => {
  const { data: reviews, isLoading, fetchData } = useApi(getReviews);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData({
      movieId: id,
      page,
    });
  }, [page]);

  if (isLoading || !reviews) {
    return <CenteredSpinner />;
  }
  if (reviews?.docs.length === 0) {
    return (
      <h3>Нет информации об отзывах зрителей</h3>
    );
  }
  console.log(reviews);
  return (
    <>
      <h3>Отзывы зрителей</h3>
      <div className="border d-flex flex-wrap">
        <Accordion className="w-50">
          {reviews
            .docs
            .map((review) => (
              <Accordion.Item eventKey={review.id} key={review.id}>
                <Accordion.Header>
                  <span className="fw-bold">{review.author}</span>
                  {`: ${review.title ?? ''}`}
                </Accordion.Header>
                <Accordion.Body>
                  {review.review}
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>
      {(page === 1 && reviews.docs.length < 10) ? null : (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)} type="button">-</button>
          <button disabled={page === reviews.pages} onClick={() => setPage(page + 1)} type="button">+</button>
        </>
      )}
    </>
  );
};

export default Reviews;
