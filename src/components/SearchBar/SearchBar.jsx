import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SearchForm from './SearchForm';
import {
  FilmsOnPageDropdown,
  FilterByAgeRating,
  FilterByCountryDropdown,
  FilterByYearButton,
} from './filteringButtons';

const FilteringBar = ({ searchHandler }) => (
  <Navbar className="mb-3" expand="lg" variant="dark">
    <div className="d-flex">
      <Nav>
        <Navbar.Toggle aria-controls="page-count-picker" />
        <Navbar.Collapse id="search">
          <div className="d-flex align-items-center">
            <FilmsOnPageDropdown searchHandler={searchHandler} />
            <FilterByCountryDropdown searchHandler={searchHandler} />
            <FilterByYearButton searchHandler={searchHandler} />
            <FilterByAgeRating searchHandler={searchHandler} />
          </div>
          <SearchForm />
        </Navbar.Collapse>
      </Nav>
    </div>
  </Navbar>
);

export default FilteringBar;
