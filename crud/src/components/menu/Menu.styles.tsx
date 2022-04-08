import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(NavLink)`
  color: #a4a6b3;
  text-decoration: none;
  height: 56px;

  :active {
    background-color: #3e4049;
    color: #dde2ff;
    border-left: 3px solid #dde2ff;
  }
`;