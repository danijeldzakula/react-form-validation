import React, { useState } from 'react';
import { useGlobal } from '../../context/AppContext';

import CreateFormAd from './CreateFormAd';
import FormAdResult from './FormAdResult';

const AddNewAd = () => {
  const [ oglas, updateOglas ] = useState([]);

  const { myName } = useGlobal();

  const addOglas = (form) => {
    updateOglas([...oglas, form]);
  }  

  return (
    <>
      <CreateFormAd addOglas={addOglas} myName={myName} />
      {oglas.length && <FormAdResult oglas={oglas} />}
    </>
  )
}

export default AddNewAd;