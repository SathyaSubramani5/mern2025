// Context.jsx
import { createContext, useState } from 'react';

export const Context = createContext();

export function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  );
}
