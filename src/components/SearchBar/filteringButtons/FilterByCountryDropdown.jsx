import React, { useEffect, useState } from 'react';
import { FormControl, NavDropdown } from 'react-bootstrap';

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
    <NavDropdown
      menuVariant="dark"
      title="Страна"
    >
      <div className="dropdown-menu-dark" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
        <FormControl
          aria-label="Начните вводить страну"
          autoFocus
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Начните вводить страну"
          value={searchTerm}
        />
        { isLoading || !data
          ? <CenteredSpinner />
          : data
            .map((country) => country.name)
            .filter((countryName) => countryName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
            .map((countryName) => (
              <NavDropdown.Item
                key={countryName}
                onClick={() => searchHandler({ 'countries.name': countryName })}
              >
                {countryName}
              </NavDropdown.Item>
            ))}
      </div>
    </NavDropdown>
  );
};

export default FilterByCountryDropdown;
