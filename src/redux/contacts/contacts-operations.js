import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61bb7695e943920017784ed1.mockapi.io/api/v1';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchContact = () => async dispatch => {
//   dispatch(fetchContactRequst());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
//   //   .catch(error => dispatch(fetchContactError(error)));
// };

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const addContact =
//   ({ name, phone }) =>
//   async dispatch => {
//     const contact = {
//       name,
//       phone,
//     };

//     dispatch(addContactRequst());

//     try {
//       const { data } = await axios.post('/contacts', contact);

//       dispatch(addContactSuccess(data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
//   };

// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequst());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
