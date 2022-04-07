import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { BtnLogout, LinkMenu, NavMenu } from './Menu.styles';

const Menu = () => {
  const { handleLogout } = useContext<any>(AuthContext);

  return (
    <>
      <NavMenu>
        <LinkMenu to="/">Home</LinkMenu>
        <LinkMenu to="/users">Usuários</LinkMenu>
        <LinkMenu to="/address">Endereços</LinkMenu>
      </NavMenu>
      <BtnLogout onClick={handleLogout}>Sair</BtnLogout>
    </>
  );
};

export default Menu;
