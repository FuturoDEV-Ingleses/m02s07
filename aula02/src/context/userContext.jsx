import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ name, password }) => {
    if (name === 'Thais' && password === '123') {
      setUser({ id: 1, name });
      return true;
    }

    return false;
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout, isAuthenticated: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
