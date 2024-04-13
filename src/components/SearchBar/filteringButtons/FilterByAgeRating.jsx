import React, { useState } from 'react';
import {
  Button, Dropdown, FormControl, InputGroup,
} from 'react-bootstrap';

const FilterByageRating = ({ searchHandler }) => {
  const [ageRating, setageRating] = useState('');

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" variant="secondary">
        Возрастной рейтинг
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Возрастной рейтинг"
            autoFocus
            onChange={(e) => setageRating(e.target.value)}
            placeholder="Возрастной рейтинг"
            value={ageRating}
          />
          <Button onClick={() => searchHandler({ ageRating })} variant="secondary">
            Поиск
          </Button>
        </InputGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterByageRating;
