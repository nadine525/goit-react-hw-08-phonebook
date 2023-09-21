import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiBallPenLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import {
  Contact,
  Person,
  ButtonEdit,
  ButtonDelete,
} from './ContactElement.styled';

import { iconSize } from '../constans';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from 'components/Modal';
import ContactEditForm from 'components/ContactEditForm/ContactEditForm';
import * as contactsOperations from '../../redux/contacts/operations';

const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  return (
    <Contact>
      <Person>
        <FaPhone size={iconSize.xs} /> {name} : {number}
      </Person>
      <div>
        <ButtonEdit type="button" onClick={openModal}>
          <RiBallPenLine size={iconSize.sm} />
        </ButtonEdit>
        <ButtonDelete type="button" onClick={() => handleDeleteContact(id)}>
          <RiDeleteBin6Line size={iconSize.sm} />
        </ButtonDelete>
      </div>

      {isOpenModal && (
        <Modal closeModal={closeModal}>
          <ContactEditForm
            id={id}
            filledName={name}
            filledNumber={number}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </Contact>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
