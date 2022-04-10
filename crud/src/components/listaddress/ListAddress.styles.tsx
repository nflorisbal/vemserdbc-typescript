import styled from 'styled-components';

export const LineAddress = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-content: center;
  align-items: baseline;
  border-bottom: 1px solid #dfe0eb;
  height: 50px;
  font-size: 12px;
  padding: 0 10px;
  :last-child {
    border: none;
  }
`;
