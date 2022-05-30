import React, { useState } from 'react';
import { useGlobal } from '../../context/AppContext';

import CreateFormAd from './CreateFormAd';
import FormAdResult from './FormAdResult';

const AddNewAd = () => {
  // ad results
  const [ oglas, updateOglas ] = useState([]);
  // get name from context
  const { myName } = useGlobal();
  // set ad results
  const addOglas = (form) => {
    updateOglas([...oglas, form]);
  }
  return (
    <>
      <CreateFormAd addOglas={addOglas} myName={myName} />
      {oglas.length ? <FormAdResult oglas={oglas} /> : null}
    </>
  )
}

export default AddNewAd;