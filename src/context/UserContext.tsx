import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  field: string;
  avatar: string;
}

interface UserContextProps {
  user: User;
  updateUser: (userData: User) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: 'Bessie Coleman',
    field: 'Civil Aviator',
    avatar: '/img/Avatar.png'
  });

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};