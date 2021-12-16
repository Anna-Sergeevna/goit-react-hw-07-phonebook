import axios from 'axios';
import {
  fetchContactRequst,
  fetchContactSuccess,
  fetchContactError,
  addContactRequst,
  addContactSuccess,
  addContactError,
  deleteContactRequst,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://61bb7695e943920017784ed1.mockapi.io/api/v1';

export const fetchContact = () => dispatch => {
  dispatch(fetchContactRequst());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequst());

    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error)));
  };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequst());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
