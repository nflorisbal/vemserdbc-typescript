import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Card, CardTitle, Container } from './Home.styles';

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
      
    </Container>
  );
};

export default Home;
