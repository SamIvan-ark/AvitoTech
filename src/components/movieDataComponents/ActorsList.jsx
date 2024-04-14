import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { getStaff } from '../../api/api';
import defaultActorPhoto from '../../assets/defaultActor.png';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';
import PaginationButtons from '../PaginationButtons';

const ActorsList = ({ id }) => {
  const { data: actors, isLoading, fetchData } = useApi(getStaff);
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => setPage(newPage);

  useEffect(() => {
    fetchData({
      sortField: 'countAwards',
      sortType: -1,
      'movies.id': id,
      'profession.value': ['Актер', 'Актриса', '!Актер дубляжа', '!Актриса дубляжа'],
      page,
      selectFields: ['countAwards', 'profession', 'id', 'name', 'photo', 'enName'],
    });
  }, [page]);

  if (isLoading || !actors) {
    return <CenteredSpinner />;
  }
  if (actors.pages === 0) {
    return (
      <h3>Нет информации о сезонах и сериях</h3>
    );
  }
  return (
    <>
      <h3>Актёры:</h3>
      <Row className="g-4 bg-dark text-light" lg={3} md={2} xs={1}>
        {actors.docs.map((actor) => {
          const name = actor.name ?? actor.enName;
          return (
            <Col key={actor.id} lg={2} md={3} s={4} xs={5}>
              <div className="bg-dark text-light border-0 me-auto ms-auto d-block">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img alt={`Фотография актера ${name}`} className="card-img" src={actor.photo ?? defaultActorPhoto} style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="p-0 pt-2">
                  <h5>{name}</h5>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      {(actors.pages < 2) ? null : (
        <PaginationButtons
          currentPage={page}
          handlePageChange={handlePageChange}
          pages={actors.pages}
        />
      )}
    </>
  );
};

export default ActorsList;
