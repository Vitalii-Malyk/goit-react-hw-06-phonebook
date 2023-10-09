import React from 'react';
import { nanoid } from 'nanoid';

import {
  WrapElementStyle,
  InputElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const FilterContacts = value => {
  let nameInputId = nanoid();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <WrapElementStyle>
      <label htmlFor={nameInputId}>Filter contacts:</label>
      <InputElementStyle
        onChange={handleChange}
        id={nameInputId}
        type="text"
        name="name"
        value={filter}
      />
    </WrapElementStyle>
  );
};

export default FilterContacts;
