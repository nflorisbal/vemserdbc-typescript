import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListUsers from '../../components/listusers/ListUsers';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import Api from '../../services/Api';

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
    <div>
      <ListUsers users={users} />
    </div>
  );
};

export default Users;
