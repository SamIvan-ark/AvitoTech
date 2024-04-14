import { useEffect, useState } from 'react';

import { getStaff } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';

const ActorsList = ({ id }) => {
  const { data: actors, isLoading, fetchData } = useApi(getStaff);
  const [page, setPage] = useState(1);

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
      <div className="border d-flex flex-wrap">
        {actors.docs
          .map((actor) => {
            const name = actor.name ?? actor.enName;
            return (
              <div className="card mb-3" key={actor.id} style={{ minWidth: '250px', maxWidth: '400px' }}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img alt={`Фотография актера ${name}`} className="img-fluid rounded-start" src={actor.photo} />
                  </div>
                  <div className="dark col-md-6">
                    <div className="card-body">
                      <p className="card-title fs-3">{name}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {(page === 1 && actors.docs.length < 10) ? null : (
        <>
          <button disabled={page === 1} onClick={() => setPage(page - 1)} type="button">-</button>
          <button disabled={page === actors.pages} onClick={() => setPage(page + 1)} type="button">+</button>
        </>
      )}
    </>
  );
};

export default ActorsList;
