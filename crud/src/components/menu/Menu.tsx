import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '../button/Button.styles';
import { ContainerMenu, LinkMenu, NavMenu } from './Menu.styles';

const Menu = () => {
  const { handleLogout } = useContext<any>(AuthContext);

  return (
    <ContainerMenu>
      <NavMenu>
        <LinkMenu to="/">Home</LinkMenu>
        <LinkMenu to="/users">Usuários</LinkMenu>
        <LinkMenu to="/address">Endereços</LinkMenu>
      </NavMenu>
      <Button onClick={handleLogout} type="button" width="50%" height="40px">
        Sair
      </Button>
    </ContainerMenu>
  );
};

export default Menu;
