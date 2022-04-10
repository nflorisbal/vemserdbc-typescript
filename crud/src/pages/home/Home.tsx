import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/container/Container.styles';
import { AddressContext } from '../../context/AddressContext';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import Api from '../../services/Api';
import { Card } from './Home.styles';


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
      <Card><h1>Status do Sistema</h1></Card>
      <Card>
        <h3>Usuários cadastrados</h3>
        <p>{ users.length }</p>
      </Card>
      <Card>
        <h3>Endereços cadastrados</h3>
        <p>{ addresses.length }</p>
      </Card>
    </Container>
  );
};

export default Home;
