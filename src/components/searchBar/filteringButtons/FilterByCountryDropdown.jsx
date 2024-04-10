import React, { useState } from 'react';
import {
  Dropdown, FormControl, InputGroup,
} from 'react-bootstrap';

const FilterByCountryDropdown = ({ options: list, searchHandler }) => {
  const options = list.map((country) => country.name);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = options
    .filter((countryName) => countryName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" variant="secondary">
        Страна
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Начните вводить страну"
            autoFocus
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Начните вводить страну"
            value={searchTerm}
          />
        </InputGroup>
        {filteredOptions.map((countryName) => (
          <Dropdown.Item
            key={countryName}
            onClick={() => searchHandler({ 'countries.name': countryName })}
          >
            {countryName}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterByCountryDropdown;
