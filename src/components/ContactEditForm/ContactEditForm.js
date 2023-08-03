import { useState } from 'react';
import {
  Form,
  Label,
  Input,
  Button,
  ContactFormDivision,
} from './ContactEditForm.styled';
import { useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/operations';

const ContactEditForm = ({ id, filledName, filledNumber }) => {
  const [name, setName] = useState(filledName);
  const [number, setNumber] = useState(filledNumber);

  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const submitEditedContact = event => {
    event.preventDefault();

    const editedContact = {
      id,
      name,
      number,
    };
    console.log(editedContact);
    dispatch(contactsOperations.editContact(editedContact));
  };

  return (
    <>
      <ContactFormDivision>
        <Form onSubmit={submitEditedContact}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor="number">Number</Label>

          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Save</Button>
        </Form>
      </ContactFormDivision>
    </>
  );
};

export default ContactEditForm;
