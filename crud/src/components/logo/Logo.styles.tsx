import styled from 'styled-components';
import logo from '../../images/vemSerColorido.png';
import logoWhite from '../../images/vemSerBranco.png';

export const Logo = styled.img.attrs((props) => ({
  src: props.color === 'colored' ? `${logo}` : `${logoWhite}`,
}))`
  width: 200px;
  margin-bottom: 50px;
`;
