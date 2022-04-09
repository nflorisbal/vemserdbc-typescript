import moment from 'moment';
import { FC, createContext, useState, ReactNode } from 'react';
import { AddUserDTO } from '../model/AddUserDTO';
import { UsersDTO } from '../model/UsersDTO';
import Api from '../services/Api';

export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({ children }) => {
  const [users, setUsers] = useState([]);
  
  const addUser = async (values: AddUserDTO) => {
    try {
      values.dataNascimento = moment(
        values.dataNascimento,
        'DD/MM/YYYY'
      ).format('YYYY-MM-DD');
      await Api.post('/pessoa', values);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const removeUser = async (id: number) => {
    try {
      await Api.delete(`/pessoa/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = () => {};

  const getUsers = async () => {
    try {
      const { data } = await Api.get('/pessoa');
      sortUsers(data)
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sortUsers = (data: UsersDTO[]) => {
    data.sort((a: any, b: any) => {
      return b.idPessoa - a.idPessoa;
    });
  };

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
