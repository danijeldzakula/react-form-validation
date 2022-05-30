import React, { createContext, useState, useContext } from 'react';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ myName, setMyName ] = useState("Hi, i'm Danijel Dzakula, Front-end developer.");

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