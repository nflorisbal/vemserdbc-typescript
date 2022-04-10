import moment from 'moment';
import Notiflix, { Notify } from 'notiflix';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { UsersDTO } from '../../model/UsersDTO';

import { ButtonForm } from '../buttonform/ButtonForm.styles';
import { ButtonsUser, LineUser } from './ListUsers.styles';

const ListUsers = ({ users }: UsersDTO) => {
  const { getUserById, removeUser, setUpdate } = useContext<any>(UserContext);

  const handleRemove = (id: number) => {
    Notiflix.Confirm.show(
      'Remover Usuário',
      'Deseja apagar este usuário?',
      'Sim',
      'Não',
      () => {
        removeUser(id);
        Notify.success('Usuário removido com sucesso.');
      }
    );
  };

  const handleUpdate = async (id: number) => {
    await getUserById(id);
    setUpdate(true);
  };

  return (
    <>
      {users.map((user) => (
        <LineUser key={user.idPessoa}>
          <div>{user.nome.toUpperCase()}</div>
          <div>
            {moment(user.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}
          </div>
          <div>{user.cpf}</div>
          <div>{user.email.toLocaleLowerCase()}</div>
          <ButtonsUser>
            <ButtonForm
              onClick={() => {
                handleUpdate(user.idPessoa);
              }}
              color="#29CC97"
            >
              Atualizar
            </ButtonForm>
            <ButtonForm
              onClick={() => {
                handleRemove(user.idPessoa);
              }}
              color="#F12B2C"
            >
              Remover
            </ButtonForm>
          </ButtonsUser>
        </LineUser>
      ))}
    </>
  );
};
export default ListUsers;
