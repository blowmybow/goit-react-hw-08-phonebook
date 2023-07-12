import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { List, Item, Span, Button } from './ContactList.styled';

import { getFilteredContacts } from '../../redux/selectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <Span>{name} :</Span>
            <Span>{number}</Span>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
