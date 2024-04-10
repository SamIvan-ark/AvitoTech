import { Spinner } from 'react-bootstrap';

const CenteredSpinner = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <Spinner animation="border" variant="primary">
      <span className="visually-hidden">Загрузка...</span>
    </Spinner>
  </div>
);

export default CenteredSpinner;
