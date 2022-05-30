import React, { useState } from 'react';
import FormContact from './CreateFormContact';
import FormContactResult from './FormContactResult';

const AddNewContact = () => {
  const [ contacts, updateContacts ] = useState([]);

  const addContact = (form) => {
    updateContacts([ ...contacts, form ]);
  }

  return (
    <>
      <FormContact addContact={addContact} />
      {contacts.length !== 0 ? <FormContactResult contacts={contacts} /> : null}
    </>
  )
}

export default AddNewContact;