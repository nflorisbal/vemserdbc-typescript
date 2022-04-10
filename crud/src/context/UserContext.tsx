import moment from 'moment';
import { Loading } from 'notiflix';
import { FC, createContext, useState, ReactNode } from 'react';
import { AddUserDTO } from '../model/UsersDTO';
import { UsersDTO } from '../model/UsersDTO';
import Api from '../services/Api';

export const UserContext = createContext({});

const UserProvider: FC<ReactNode> = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [update, setUpdate] = useState(false);

  const addUser = async (values: AddUserDTO) => {
    try {
      values.dataNascimento = moment(
        values.dataNascimento,
        'DD/MM/YYYY'
      ).format('YYYY-MM-DD');
      values.cpf = values.cpf.replaceAll(/[^\d]/g, '');
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

  const updateUser = async (id: number, values: AddUserDTO) => {
    try {
      values.dataNascimento = moment(
        values.dataNascimento,
        'DD/MM/YYYY'
      ).format('YYYY-MM-DD');
      values.cpf = values.cpf.replaceAll(/[^\d]/g, '');
      await Api.put(`/pessoa/${id}`, values);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const { data } = await Api.get('/pessoa');
      sortUsers(data);
      setUsers(data);
      Loading.remove();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async (id: number) => {
    try {
      const { data } = await Api.get(`/pessoa/{idPessoa}?idPessoa=${id}`);
      setUser(data);
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
        update,
        setUpdate,
        users,
        getUsers,
        user,
        getUserById,
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
