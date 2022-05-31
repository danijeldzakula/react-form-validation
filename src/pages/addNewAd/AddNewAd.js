import React, { useState, useEffect, useCallback } from 'react';
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

  // remove item from local storage
  const removeLocalStorageItem = (key, index) => {
    let popArray = JSON.parse(window.localStorage.getItem(key));
    popArray.splice(index, 1);
    window.localStorage.setItem(key, JSON.stringify(popArray));
  }      
  
  // delete ad
  const deleteAd = useCallback((id) => {
    let targetId = parseInt(id);
    console.log(targetId);
  }, []);

  // saved ad in local storage
  useEffect(() => {
    const saveAd = JSON.parse(localStorage.getItem('data-ad'));
    saveAd && updateOglas(saveAd);
  }, []);

  // update to local storage
  useEffect(() => {
    localStorage.setItem('data-ad', JSON.stringify(oglas));
  }, [ oglas ]);

  return (
    <>
      <CreateFormAd addOglas={addOglas} myName={myName} />
      {oglas.length ? <FormAdResult oglas={oglas} deleteAd={deleteAd} /> : null}
    </>
  )
}

export default AddNewAd;