import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import { AsideMenu } from './Header.styles';

const Header = () => {
  const { haveToken } = useContext<any>(AuthContext);
  return (
    haveToken() && (
      <AsideMenu>
        <Logo />
        <Menu />
      </AsideMenu>
    )
  );
};

export default Header;
