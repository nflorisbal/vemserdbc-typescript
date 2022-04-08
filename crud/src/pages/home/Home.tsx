import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container/Container.styles';
import { AuthContext } from '../../context/AuthContext';


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
      <h1>Alguma coisa no futuro</h1>
    </Container>
  );
};

export default Home;
