import React from 'react';
import { Label, ParagrafCreate } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label>
      <ParagrafCreate>Find Contacts by name</ParagrafCreate>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
