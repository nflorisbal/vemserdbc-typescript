import { FC, createContext, useState, ReactNode } from 'react';
import { AddUserDTO } from '../model/AddUserDTO';
import { UsersDTO } from '../model/UsersDTO';
import Api from '../services/Api';

export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await Api.get('/pessoa');
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = (values: AddUserDTO) => {
    console.log(values);
  };

  const updateUser = () => {};

  const removeUser = () => {};

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        addUser,
        updateUser,
        removeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
