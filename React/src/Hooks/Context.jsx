import React, { createContext } from 'react';

const Context = createContext();

export const UserContext = ({ children }) => {
  const user = {
    name: 'Sathya',
    phn: '8122024240'
  };

  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
};
export default Context