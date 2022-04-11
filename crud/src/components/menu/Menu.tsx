import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AiOutlineHome, AiOutlineTeam, AiOutlineCompass } from 'react-icons/ai';
import { Button } from '../button/Button.styles';
import { ContainerMenu, LinkMenu, NavMenu } from './Menu.styles';

const Menu = () => {
  const { handleLogout } = useContext<any>(AuthContext);

  return (
    <ContainerMenu>
      <NavMenu>
        <LinkMenu to="/">
          <AiOutlineHome />
          Home
        </LinkMenu>
        <LinkMenu to="/users">
          <AiOutlineTeam />
          Usuários
        </LinkMenu>
        <LinkMenu to="/address">
          <AiOutlineCompass />
          Endereços
        </LinkMenu>
      </NavMenu>
      <Button onClick={handleLogout} type="button" width="50%" height="40px">
        Sair
      </Button>
    </ContainerMenu>
  );
};

export default Menu;
