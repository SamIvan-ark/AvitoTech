import React, { useEffect, useState } from 'react';
import {
  Dropdown, FormControl, InputGroup,
} from 'react-bootstrap';

import { getAcceptableValuesRange } from '../../../api/api';
import useApi from '../../../hooks/useApi';
import CenteredSpinner from '../../CenteredSpinner';

const FilterByCountryDropdown = ({ searchHandler }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, fetchData } = useApi(getAcceptableValuesRange);
  const searchParams = { field: 'countries.name' };

  useEffect(() => {
    fetchData('movie/possible-values-by-field', searchParams);
  }, []);

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
        { isLoading || !data
          ? <CenteredSpinner />
          : data
            .map((country) => country.name)
            .filter((countryName) => countryName.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((countryName) => (
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
