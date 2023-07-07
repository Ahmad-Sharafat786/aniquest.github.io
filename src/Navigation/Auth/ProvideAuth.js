
import React, { createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
const authContext = createContext();
export function ProvideAuth({ children }) {
  const [cookies] = useCookies(['dummy_user']);
  const user = cookies;
  return (
    <authContext.Provider value={user}>
      {children}
    </authContext.Provider>
  );
}
export function useAuth() {
  return useContext(authContext);
}
