import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

const selectSortedContacts = createSelector(selectContacts, contacts =>
  [...contacts].sort((a, b) => a.name.localeCompare(b.name))
);

export const selectFilter = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectSortedContacts, selectFilter],
  (contacts, filter) => {
    const stringOrNumber = isNaN(filter);
    // console.log(stringOrNumber);

    if (filter === ' ') {
      return contacts;
    }
    if (stringOrNumber) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (!stringOrNumber) {
      return contacts.filter(contact => contact.number.includes(filter));
    }
  }
);
