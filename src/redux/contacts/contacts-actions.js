import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequst = createAction('contacts/fetchContactRequst');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequst = createAction('contacts/addContactRequst');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequst = createAction('contacts/deleteContactRequst');
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/filter');
