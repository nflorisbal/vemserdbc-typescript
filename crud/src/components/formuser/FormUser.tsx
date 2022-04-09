import * as Yup from 'yup';
import { Formik } from 'formik';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { AddUserDTO } from '../../model/AddUserDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';
import {
  FormUserContainer,
  FormUserError,
  FormUserField,
  FormUserLabel,
} from './FormUser.styles';

const REQUIRED_FIELD_MSG = 'Campo obrigatório.';
const FORM_INITIAL_VALUES = {
  nome: '',
  email: '',
  dataNascimento: '',
  cpf: '',
};

const FormUser = () => {
  const { addUser, users } = useContext<any>(UserContext);

  const userSchema = Yup.object().shape({
    nome: Yup.string()
      .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g, 'Deve conter apenas letras.')
      .min(2, 'Mínimo 2 caracteres.')
      .max(50, 'Máximo 50 caracteres.')
      .required(REQUIRED_FIELD_MSG),

    email: Yup.string()
      .email('Deve ser um e-mail válido.')
      .required(REQUIRED_FIELD_MSG),

    dataNascimento: Yup.string().required(REQUIRED_FIELD_MSG),

    cpf: Yup.string()
      // .matches(
      //   /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/,
      //   'Deve seguir o formato 000.000.000-00'
      // )
      .required(REQUIRED_FIELD_MSG),
  });

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={userSchema}
      onSubmit={(values: AddUserDTO, actions) => {
        addUser(values);
        actions.resetForm();
      }}
    >
      {(props) => (
        <FormUserContainer>
          {console.log(props)}
          <FormUserLabel htmlFor="nome">Nome:</FormUserLabel>
          <FormUserField
            id="nome"
            name="nome"
            placeholder="Digite o nome"
            required
          />
          <FormUserError component="span" name="nome" />
          <FormUserLabel htmlFor="email">Email:</FormUserLabel>
          <FormUserField
            id="email"
            name="email"
            placeholder="Digite o e-mail"
            type="email"
            required
          />
          <FormUserError component="span" name="email" />
          <FormUserLabel htmlFor="dataNascimento">
            Data de nascimento:
          </FormUserLabel>
          <FormUserField
            id="dataNascimento"
            name="dataNascimento"
            placeholder="00/00/0000"
            required
          />
          <FormUserError component="span" name="dataNascimento" />
          <FormUserLabel htmlFor="cpf">CPF:</FormUserLabel>
          <FormUserField
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
            required
          />
          <FormUserError component="span" name="cpf" />
          <ButtonForm color="#3751FF" type="submit">
            Enviar
          </ButtonForm>
        </FormUserContainer>
      )}
    </Formik>
  );
};
export default FormUser;
