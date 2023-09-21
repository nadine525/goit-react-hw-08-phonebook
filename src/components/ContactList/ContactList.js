import { useEffect } from 'react';
import ContactElement from '../ContactElement';
import { List, Paragraf, ContactListDivision } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectVisibleContacts,
  selectContacts,
} from '../../redux/contacts/selectors';
import * as contactsOperations from '../../redux/contacts/operations';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const allContacts = useSelector(selectContacts);
  const allContactsLength = allContacts.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  // console.log(contacts);

  return (
    <>
      <ContactListDivision>
        <Paragraf>My contacts</Paragraf>
        <List>
          {allContactsLength > 0 ? (
            visibleContacts.map(({ id, name, number }) => {
              return (
                <ContactElement key={id} id={id} name={name} number={number} />
              );
            })
          ) : (
            <p>There isn't contact whis that name </p>
          )}
        </List>
      </ContactListDivision>
    </>
  );
};

export default ContactList;
