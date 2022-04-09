import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormUserContainer = styled(Form)`
  display: grid;
  padding: 10px;
`;

export const FormUserField = styled(Field)`
  height: 30px;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  background-color: #fcfdfe;
`;
