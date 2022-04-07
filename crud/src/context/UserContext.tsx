import { FC, createContext, useState } from 'react';
import { UsersDTO } from '../model/UsersDTO';
import Api from '../services/Api';

export const UserContext = createContext({});

const UserProvider: FC<any> = ({ children }) => {
  const [users, setUsers] = useState<UsersDTO['users']>([]);

  const getUsers = async () => {
    try {
      const { data } = await Api.get('/pessoa');
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
