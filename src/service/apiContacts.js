import axios from 'axios';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
