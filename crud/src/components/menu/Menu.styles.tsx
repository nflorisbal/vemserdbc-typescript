import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  color: #a4a6b3;
  text-decoration: none;
  height: 56px;
  :active {
    background-color: #3e4049;
    color: #dde2ff;
    border-left: 3px solid #dde2ff;
  }
`;

export const BtnLogout = styled.button`
  color: #ffffff;
  height: 40px;
  width: 50%;
  background: #3751ff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
`;
