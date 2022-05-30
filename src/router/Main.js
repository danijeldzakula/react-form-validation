import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AddNewAd from '../pages/addNewAd/AddNewAd';
import AddNewContact from '../pages/addNewContact/AddNewContact';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={'/'} index element={ <AddNewAd />} />
        <Route path={'/add-new-contact'} element={ <AddNewContact />} />
      </Routes>
    </main>
  )
}

export default Main;