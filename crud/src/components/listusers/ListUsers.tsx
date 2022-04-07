import { UsersDTO } from '../../model/UsersDTO';
import { LineUser } from './ListUsers.styles';

const ListUsers = ({ users }: UsersDTO) => {
  return (
    <>
      {users.map((user) => (
        <LineUser key={user.idPessoa}>
          <div>{user.nome}</div>
          <div>{user.dataNascimento}</div>
          <div>{user.cpf}</div>
          <div>{user.email}</div>
        </LineUser>
      ))}
    </>
  );
};
export default ListUsers;
