import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container/Container.styles';
import { AuthContext } from '../../context/AuthContext';

const NotFound = () => {
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
      <h1>Página não encontrada.</h1>
    </Container>
  );
};

export default NotFound;
