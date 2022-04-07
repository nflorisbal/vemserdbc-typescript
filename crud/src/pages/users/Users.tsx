import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import ListUsers from '../../components/listusers/ListUsers';
import Api from '../../services/Api';
import { Container } from '../../components/container/Container.styles';

const Users = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const { users, getUsers } = useContext<any>(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    } else {
      Api.defaults.headers.common['Authorization'] = haveToken();
    }
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ListUsers users={users} />
    </Container>
  );
};

export default Users;
