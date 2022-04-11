import styled from 'styled-components';

export const LineList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1.2fr;
  align-content: center;
  align-items: baseline;
  border-bottom: 1px solid #dfe0eb;
  height: 50px;
  font-size: 12px;
  padding: 0 10px;
  :last-child {
    border: none;
  }

  p{
    font-weight: bold;
  }
`;

export const ButtonsList = styled.div`
  display: flex;
  justify-content: space-between;
`;


