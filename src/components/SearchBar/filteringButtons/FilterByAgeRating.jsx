import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputGroup,
  NavDropdown,
} from 'react-bootstrap';

const FilterByageRating = ({ searchHandler }) => {
  const [ageRating, setageRating] = useState('');

  return (
    (
      <NavDropdown
        menuVariant="dark"
        title="Возрастной рейтинг"
      >

        <div className="dropdown-menu-dark">
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
        </div>
      </NavDropdown>
    )
  );
};

export default FilterByageRating;
