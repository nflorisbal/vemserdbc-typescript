import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Menu from '../menu/Menu';
import { AsideMenu } from './Header.styles';

const Header = () => {
  const { haveToken } = useContext<any>(AuthContext);
  return (
    haveToken() && (
      <AsideMenu>
        <Menu />
      </AsideMenu>
    )
  );
};

export default Header;
