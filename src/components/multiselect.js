import React from 'react';
import { Multiselect } from 'react-bootstrap-multiselect';

const MultiSelect = ({ options, selectedValues, handleChange }) => {
  return (
    <Multiselect
      options={options}
      selectedValues={selectedValues}
      onSelect={handleChange}
      onDeselect={handleChange}
      buttonClass="btn btn-primary"
    />
  );
};

export default MultiSelect;
