import React, { useState } from 'react';
import {
  Button, Dropdown, FormControl, InputGroup,
} from 'react-bootstrap';

const FilterByYearButton = ({ searchHandler }) => {
  const [year, setYear] = useState('');

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" variant="secondary">
        Год
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Год"
            autoFocus
            onChange={(e) => setYear(e.target.value)}
            placeholder="Год"
            value={year}
          />
          <Button onClick={() => searchHandler({ year })} variant="secondary">
            Поиск
          </Button>
        </InputGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterByYearButton;
