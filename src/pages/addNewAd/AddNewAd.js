import React, { useState } from 'react';

import CreateFormAd from './CreateFormAd';
import FormAdResult from './FormAdResult';

const AddNewAd = () => {
  const [ oglas, updateOglas ] = useState([]);

  const addOglas = (form) => {
    updateOglas([...oglas, form]);
  }
  

  return (
    <>
      <CreateFormAd addOglas={addOglas} />
      {oglas.length !== 0 ? <FormAdResult oglas={oglas} /> : null}
    </>
  )
}

export default AddNewAd;