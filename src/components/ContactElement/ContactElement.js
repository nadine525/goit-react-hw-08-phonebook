import React from 'react';
import { FaPhone } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Contact, Person } from './ContactElement.styled';
import { Button } from '../ContactForm/ContactForm.styled';
import { iconSize } from '../constans';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/operations';

const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  return (
    <Contact>
      <Person>
        <FaPhone size={iconSize.xs} /> {name} : {number}
      </Person>
      <Button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </Button>
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
