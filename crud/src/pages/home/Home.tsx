import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container/Container.styles';
import { AuthContext } from '../../context/AuthContext';
import { Card } from './Home.styles';


const Home = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Card><h1>Alguma coisa no futuro</h1></Card>
    </Container>
  );
};

export default Home;
