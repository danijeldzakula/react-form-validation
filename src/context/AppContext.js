import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  // initial state for context test
  const [ myName, setMyName ] = useState("Hi, i'm Danijel Dzakula, Front-end developer.");

  // return all value from context 
  const CONTEXT_VALUE = {
    myName,
    setMyName
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