import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container/Container.styles';
import { AddressContext } from '../../context/AddressContext';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import Api from '../../services/Api';
import { Card, CardData, ValueData } from './Home.styles';

const Home = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const { getUsers, users } = useContext<any>(UserContext);
  const { getAddresses, addresses } = useContext<any>(AddressContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    } else {
      Api.defaults.headers.common['Authorization'] = haveToken();
      getUsers();
      getAddresses();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <h1>Status do Sistema</h1>
      <Card>
        <CardData>
          <h3>Usuários cadastrados</h3>
          <ValueData>{users.length}</ValueData>
        </CardData>
        <CardData>
          <h3>Endereços cadastrados</h3>
          <ValueData>{addresses.length}</ValueData>
        </CardData>
      </Card>
    </Container>
  );
};

export default Home;
