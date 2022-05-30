import React, { useState } from 'react';
import { useGlobal } from '../../context/AppContext';
import FormContact from './CreateFormContact';
import FormContactResult from './FormContactResult';

const AddNewContact = () => {
  const [ contacts, updateContacts ] = useState([]);

  const { myName } = useGlobal();

  const addContact = (form) => {
    updateContacts([ ...contacts, form ]);
  }

  return (
    <>
      <FormContact addContact={addContact} myName={myName} />
      {contacts.length ? <FormContactResult contacts={contacts} /> : null}
    </>
  )
}

export default AddNewContact;