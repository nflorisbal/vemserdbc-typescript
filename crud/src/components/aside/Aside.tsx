import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Logo } from '../logo/Logo.styles';
import Menu from '../menu/Menu';

import { AsideMenu } from './Aside.styles';

const Aside = () => {
  const { haveToken } = useContext<any>(AuthContext);
  return (
    haveToken() && (
      <AsideMenu>
        <Logo alt="logo" />
        <Menu />
      </AsideMenu>
    )
  );
};

export default Aside;
