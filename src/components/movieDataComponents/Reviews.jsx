import { useEffect, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';

import { getReviews } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';
import PaginationButtons from '../PaginationButtons';

const Reviews = ({ id }) => {
  const { data: reviews, isLoading, fetchData } = useApi(getReviews);
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => setPage(newPage);

  useEffect(() => {
    fetchData({
      movieId: id,
      page,
    });
  }, [page, id]);

  if (isLoading || !reviews) {
    return <CenteredSpinner />;
  }
  if (reviews.pages === 0) {
    return (
      <h3>Нет информации об отзывах зрителей</h3>
    );
  }
  return (
    <>
      <h3>Отзывы зрителей</h3>
      <Row className="bg-dark text-light">
        <Col className="mx-auto" md={10} xs={12}>
          <Accordion className="bg-dark text-light">
            {reviews.docs.map((review) => (
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
        </Col>
      </Row>

      {(reviews.pages < 2) ? null : (
        <PaginationButtons
          currentPage={page}
          handlePageChange={handlePageChange}
          pages={reviews.pages}
        />
      )}
    </>
  );
};

export default Reviews;
