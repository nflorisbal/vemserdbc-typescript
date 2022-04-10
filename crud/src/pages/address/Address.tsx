import { Loading } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AddressContext } from '../../context/AddressContext';
import Api from '../../services/Api';
import FormAddress from '../../components/fomraddress/FormAddress';
import { Container } from '../../components/container/Container.styles';
import ListAddresses from '../../components/listaddresses/ListAddresses';
import { ContainerAddress } from './Address.styles';

const Address = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const { addresses, getAddresses } = useContext<any>(AddressContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    } else {
      Loading.standard();
      Api.defaults.headers.common['Authorization'] = haveToken();
      getAddresses();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ContainerAddress>
        <FormAddress />
      </ContainerAddress>
      <ContainerAddress>
        <ListAddresses addresses={addresses} />
      </ContainerAddress>
    </Container>
  );
};

export default Address;
