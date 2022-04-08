import styled from 'styled-components';

export const Button = styled.button<{ width: string; height: string }>`
  color: #ffffff;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: #3751ff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  transition: ;
  :hover {
    background: #23339c;
  }
`;
