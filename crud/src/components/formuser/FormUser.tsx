import * as Yup from 'yup';
import moment from 'moment';
import { Notify } from 'notiflix';
import { ErrorMessage, Field, Formik } from 'formik';
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

const userSchema = Yup.object().shape({
  nome: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/, 'Deve conter apenas letras.')
    .min(2, 'Mínimo 2 caracteres.')
    .max(50, 'Máximo 50 caracteres.'),

  email: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .email('Deve ser um e-mail válido.'),

  dataNascimento: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .test('dataNascimento', 'Data inválida.', (value) => {
      return moment(value, 'DDMMYYYY').isValid();
    }),

  cpf: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .matches(
      /^([\d]){3}\.([\d]){3}\.([\d]){3}-([\d]){2}$/,
      'Deve seguir o formato 000.000.000-00'
    ),
});

const FormUser = () => {
  const { addUser, updateUser, user, update, setUpdate } = useContext<any>(UserContext);

  const handleSubmit = (values: AddUserDTO, actions: any) => {
    if (update) {
      Notify.success('Usuário atualizado com sucesso.');
      setUpdate(false);
      updateUser(user.idPessoa, values);
    } else {
      addUser(values);
      Notify.success('Usuário adicionado com sucesso.');
    }
    actions.resetForm();
  };

  const maskCpf = (cpf: string) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  return (
    <Formik
      initialValues={
        !update
          ? FORM_INITIAL_VALUES
          : {
              nome: user.nome,
              email: user.email,
              dataNascimento: moment(user.dataNascimento, 'YYYY-MM-DD').format(
                'DD/MM/YYYY'
              ),
              cpf: maskCpf(user.cpf),
            }
      }
      validationSchema={userSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ isValid, dirty }) => (
        <FormUserContainer>
          <FormUserLabel htmlFor="nome">Nome:</FormUserLabel>
          <Field
            as={FormUserField}
            name="nome"
            placeholder="Digite o nome"
            required
          />
          <ErrorMessage component={FormUserError} name="nome" />
          <FormUserLabel htmlFor="email">Email:</FormUserLabel>
          <Field
            as={FormUserField}
            name="email"
            placeholder="Digite o e-mail"
            type="email"
            required
          />
          <ErrorMessage component={FormUserError} name="email" />
          <FormUserLabel htmlFor="dataNascimento">
            Data de nascimento:
          </FormUserLabel>
          <Field
            as={FormUserField}
            mask="99/99/9999"
            name="dataNascimento"
            placeholder="00/00/0000"
            required
          />
          <ErrorMessage component={FormUserError} name="dataNascimento" />
          <FormUserLabel htmlFor="cpf">CPF:</FormUserLabel>
          <Field
            as={FormUserField}
            mask="999.999.999-99"
            name="cpf"
            placeholder="000.000.000-00"
            required
          />
          <ErrorMessage component={FormUserError} name="cpf" />
          <ButtonForm
            disabled={!isValid || !dirty}
            color="#3751FF"
            type="submit"
          >
            Enviar
          </ButtonForm>
        </FormUserContainer>
      )}
    </Formik>
  );
};
export default FormUser;
