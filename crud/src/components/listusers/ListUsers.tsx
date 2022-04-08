import { UsersDTO } from '../../model/UsersDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';
import { ButtonsUser, LineUser } from './ListUsers.styles';

const ListUsers = ({ users }: UsersDTO) => {
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
                console.log('removeu');
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
