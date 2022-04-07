import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BtnLogout, ContainerMenu, LinkMenu, NavMenu } from './Menu.styles';

const Menu = () => {
  const { handleLogout } = useContext<any>(AuthContext);

  return (
    <ContainerMenu>
      <NavMenu>
        <LinkMenu to="/">Home</LinkMenu>
        <LinkMenu to="/users">Usuários</LinkMenu>
        <LinkMenu to="/address">Endereços</LinkMenu>
      </NavMenu>
      <BtnLogout onClick={handleLogout} type='button'>Sair</BtnLogout>
    </ContainerMenu>
  );
};

export default Menu;
