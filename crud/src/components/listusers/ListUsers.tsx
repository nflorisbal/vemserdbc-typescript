import Notiflix from 'notiflix';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { UsersDTO } from '../../model/UsersDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';
import { ButtonsUser, LineUser } from './ListUsers.styles';

const ListUsers = ({ users }: UsersDTO) => {
  const { removeUser } = useContext<any>(UserContext);
  
  const handleRemove = (id: number) => {
    Notiflix.Confirm.show(
      'Remover Usuário',
      'Deseja apagar este usuário?',
      'Sim',
      'Não',
      () => {
        removeUser(id);
      }
    );
  };

  return (
    <>
      {users.map((user) => (
        <LineUser key={user.idPessoa}>
          <div>{user.nome.toUpperCase()}</div>
          <div>{user.dataNascimento}</div>
          <div>{user.cpf}</div>
          <div>{user.email.toLocaleLowerCase()}</div>
          <ButtonsUser>
            <ButtonForm
              onClick={() => {
                console.log('atualizou');
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
