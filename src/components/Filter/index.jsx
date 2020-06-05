import React from 'react';
import propTypes from 'prop-types';

const Filter = ({ filterValue, contactList, onChangeFilter }) =>
  contactList.length > 2 && (
    <label>
      Find contact by name
      <input
        type="text"
        name="name"
        value={filterValue}
        onChange={onChangeFilter}
      />
    </label>
  );

Filter.propTypes = {
  filterValue: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
  contactList: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Filter;
