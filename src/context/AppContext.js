import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ searchBar, setSearchBar ] = useState('Dado');

  const CONTEXT_VALUE = {
    searchBar,
    setSearchBar
  }

  return (
    <AppContext.Provider value={CONTEXT_VALUE}>
      {children}
    </AppContext.Provider>
  );
};

// call custom hook
const useGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobal };