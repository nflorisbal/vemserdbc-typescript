import { Form } from 'formik';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

export const FormAddressContainer = styled(Form)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
`;

export const FormAddressLabel = styled.label`
  margin-left: 5px;
`;

export const FormAddressField = styled(ReactInputMask)`
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #f0f1f7;
  background-color: #fcfdfe;
`;

export const FormAddressError = styled.span`
  color: red;
  font-size: 0.7rem;
  margin-left: 5px;
  margin-bottom: 10px;
`;

