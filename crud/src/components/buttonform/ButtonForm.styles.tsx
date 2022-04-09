import styled from 'styled-components';

export const ButtonForm = styled.button<{ color: string }>`
  color: #fff;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 8px;
  padding: 5px;
  width: 65px;

  :hover:enabled {
    filter: brightness(0.9);
  }

  :disabled {
    background-color: #cacaca;
  }
`;
