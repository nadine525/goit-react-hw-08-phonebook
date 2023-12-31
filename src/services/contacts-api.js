import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

// console.log(fetchContacts());

export const addContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  // console.log(response.data);

  return response.data;
};

export const editContact = async editedContact => {
  const response = await axios.patch(`/contacts/${editedContact.id}`, {
    name: editedContact.name,
    number: editedContact.number,
  });
  // console.log(response.data);

  return response.data;
};
