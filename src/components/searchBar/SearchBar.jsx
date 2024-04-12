import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  FilmsOnPageDropdown,
  FilterByAgeRating,
  FilterByCountryDropdown,
  FilterByYearButton,
} from './filteringButtons';

const FilteringBar = ({ searchHandler }) => (
  <Navbar bg="dark" className="mb-3" expand="lg" variant="dark">
    <Container fluid>
      <Nav>
        <FilmsOnPageDropdown searchHandler={searchHandler} />
        <FilterByCountryDropdown searchHandler={searchHandler} />
        <FilterByYearButton searchHandler={searchHandler} />
        <FilterByAgeRating searchHandler={searchHandler} />
      </Nav>
    </Container>
  </Navbar>
);

export default FilteringBar;
