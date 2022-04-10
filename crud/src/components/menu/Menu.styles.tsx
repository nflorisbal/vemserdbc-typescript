import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  svg {
    margin-right: 20px;
  }
`;

export const LinkMenu = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #a4a6b3;
  text-decoration: none;
  height: 56px;
  padding-left: 30px;

 :active {
    background-color: #3e4049;
    color: #dde2ff;
    border-left: 3px solid #dde2ff;
  }
`;
