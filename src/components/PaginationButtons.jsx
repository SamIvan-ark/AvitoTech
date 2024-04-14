import { Button } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const PaginationButtons = ({ currentPage, pages, handlePageChange }) => (
  <div className="d-flex flex-row justify-content-around mt-4 mb-4">
    <Button
      onClick={() => handlePageChange(currentPage === 1 ? pages : currentPage - 1)}
      type="button"
      variant="outline-light"
    >
      <ArrowLeft />
    </Button>
    <Button
      onClick={() => handlePageChange(currentPage === pages ? pages : currentPage + 1)}
      type="button"
      variant="outline-light"
    >
      <ArrowRight />
    </Button>
  </div>
);

export default PaginationButtons;
