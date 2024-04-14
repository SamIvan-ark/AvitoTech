import React, { useState } from 'react';
import {
  Button, FormControl, InputGroup, NavDropdown,
} from 'react-bootstrap';

const FilterByYearButton = ({ searchHandler }) => {
  const [year, setYear] = useState('');

  return (
    <NavDropdown
      menuVariant="dark"
      title="Год"
    >

      <div className="dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
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
      </div>
    </NavDropdown>
  );
};

export default FilterByYearButton;
