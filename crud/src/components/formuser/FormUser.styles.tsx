import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const FormUserContainer = styled(Form)`
  display: grid;
  padding: 10px;
`;

export const FormUserLabel = styled.label`
  margin-left: 5px;
`;

export const FormUserField = styled(Field)`
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  background-color: #fcfdfe;
  margin-bottom: 10px;
`;

export const FormUserError = styled(ErrorMessage)`
  color: red;
  font-size: 0.7rem;
  margin-left: 5px;
  margin-bottom: 10px;
`;
