import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import ListUsers from '../../components/listusers/ListUsers';
import Api from '../../services/Api';
import { Container } from '../../components/container/Container.styles';
import FormUser from '../../components/formuser/FormUser';
import { ContainerUsers } from './Users.styles';
import { Loading } from 'notiflix';

const Users = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const { users, getUsers, setUpdate } = useContext<any>(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    } else {
      Loading.standard();
      Api.defaults.headers.common['Authorization'] = haveToken();
      getUsers();
      setUpdate(false);
    }
    // eslint-disable-next-line
  },[]);

  return (
    <Container>
      <ContainerUsers>
        <FormUser />
      </ContainerUsers>
      <ContainerUsers>
        <ListUsers users={users} />
      </ContainerUsers>
    </Container>
  );
};

export default Users;
