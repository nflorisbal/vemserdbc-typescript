import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #363740;
`;

export const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 582px;
  width: 380px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dfe0eb;
`;

export const TitleLogin = styled.h1`
  font-size: 40px;
  color: #333;
  margin-bottom: 20px;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const LabelLogin = styled.label`
  color: #9fa2b4;
  margin-bottom: 5px;
`;

export const InputForm = styled.input`
  height: 42px;
  width: 316px;
  background-color: #fcfdfe;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  padding: 10px;
  outline-color: #c6c6c6;

  ::placeholder {
    color: #9fa2b4;
  }
`;

export const BtnForm = styled.button`
  color: #ffffff;
  height: 48px;
  width: 316px;
  background: #3751ff;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
`;
