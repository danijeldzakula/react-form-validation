import React, { useState, useEffect } from 'react';
import { useGlobal } from '../../context/AppContext';
import FormContact from './CreateFormContact';
import FormContactResult from './FormContactResult';

const AddNewContact = () => {
  // contact results
  const [ contacts, updateContacts ] = useState([]);
  // get name from context 
  const { myName } = useGlobal();
  // set contact results
  const addContact = (form) => {
    updateContacts([ ...contacts, form ]);
  }

  // saved ad in local storage
  useEffect(() => {
    const saveContacts = JSON.parse(localStorage.getItem('data-contacts'));
    saveContacts && updateContacts(saveContacts);
  }, []);

  // update to local storage
  useEffect(() => {
    localStorage.setItem('data-contacts', JSON.stringify(contacts));
  }, [ contacts ]);

  return (
    <>
      <FormContact addContact={addContact} myName={myName} />
      {contacts.length ? <FormContactResult contacts={contacts} /> : null}
    </>
  )
}

export default AddNewContact;