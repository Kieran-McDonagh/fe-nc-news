import { createContext, useEffect, useState } from 'react';
import { getUsers } from '../utils/api-utils';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUsers().then(({users}) => {
      setUser(users)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};