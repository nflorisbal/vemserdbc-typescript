import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Card, CardTitle, Container } from './Home.styles';

const Home = () => {
  const { haveToken, handleLogout } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) navigate('/login');
  }, []);

  return (
    <Container>
      <Card>
        <CardTitle>Usuários</CardTitle>
      </Card>
      <Card>
        <CardTitle>Endereços</CardTitle>
      </Card>
      <button onClick={() => handleLogout()}>Logout</button>
    </Container>
  );
};

export default Home;
