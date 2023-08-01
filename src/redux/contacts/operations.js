import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-api';
import { toast } from 'react-toastify';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/postContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addContact(newContact);
      // toast.success('Very good! The contact was added.');
      return contact;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deletedContact = await contactsAPI.deleteContact(contactId);
      console.log(deletedContact.id);
      // toast.success('The contact was deleted.');
      return deletedContact.id;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (editedContact, { rejectWithValue }) => {
    try {
      const changedContact = await contactsAPI.editContact(editedContact);
      // console.log(changedContact);
      toast.success('The contact was saved.');
      return changedContact;
    } catch (error) {
      toast.error('Sorry! There is an error.');
      return rejectWithValue(error);
    }
  }
);
