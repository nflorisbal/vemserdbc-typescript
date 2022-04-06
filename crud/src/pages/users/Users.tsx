import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Users = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) navigate('/login');
  }, []);

  return <div>Users</div>;
};

export default Users;
