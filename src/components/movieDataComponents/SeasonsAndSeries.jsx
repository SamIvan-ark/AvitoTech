import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';

import { getSeasons } from '../../api/api';
import useApi from '../../hooks/useApi';
import CenteredSpinner from '../CenteredSpinner';

const SeasonsAndSeries = ({ id }) => {
  const { data: seasons, isLoading, fetchData } = useApi(getSeasons);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData({
      sortField: 'airDate',
      sortType: 1,
      movieId: id,
      page,
    });
  }, [page]);

  if (isLoading || !seasons) {
    return <CenteredSpinner />;
  }
  if (seasons.pages === 0) {
    return (
      <h3>Нет информации о сезонах и сериях</h3>
    );
  }
  return (
    <>
      <h3>Сезоны и серии:</h3>
      <div>
        <Accordion className="w-50">
          {seasons
            .docs
            .map((season) => (
              <Accordion.Item eventKey={season.number} key={season.number}>
                <Accordion.Header>{`Сезон ${season.number}`}</Accordion.Header>
                <Accordion.Body>
                  {season.description}
                  {season.episodes.length > 0 && (
                  <ul>
                    Список эпизодов:
                    {season.episodes.map((episode) => (
                      <li key={episode.number}>
                        {`${episode.name}
                            —
                            ${(new Date(episode.airDate)).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}`}
                      </li>
                    ))}
                  </ul>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          <button disabled={page === 1} onClick={() => setPage(page - 1)} type="button">-</button>
          <button disabled={page === seasons.pages} onClick={() => setPage(page + 1)} type="button">+</button>
        </Accordion>
      </div>
    </>
  );
};

export default SeasonsAndSeries;
