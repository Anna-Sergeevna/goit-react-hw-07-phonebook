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

export const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequst());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};

export const addContact =
  ({ name, phone }) =>
  async dispatch => {
    const contact = {
      name,
      phone,
    };

    dispatch(addContactRequst());

    try {
      const { data } = await axios.post('/contacts', contact);

      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequst());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
