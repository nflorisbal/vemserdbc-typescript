import * as Yup from 'yup';
import { ErrorMessage, Formik } from 'formik';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { AddUserDTO } from '../../model/AddUserDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';
import { FormUserContainer, FormUserField } from './FormUser.styles';

const FormUser = () => {
  const { addUser, users } = useContext<any>(UserContext);

  const userSchema = Yup.object().shape({
    nome: Yup.string()
      .min(2, 'Mínimo 2 caracteres.')
      .max(50, 'Máximo 50 caracteres.')
      .required('Campo obrigatório.'),

    email: Yup.string()
      .email('Deve ser um e-mail válido.')
      .required('Campo obrigatório'),

    dataNascimento: Yup.string()
      .required('Campo obrigatório'),
  });

  return (
    <Formik
      initialValues={{
        nome: '',
        email: '',
        dataNascimento: '',
        cpf: '',
      }}
      validationSchema={userSchema}
      onSubmit={async (values: AddUserDTO) => {
        addUser(values);
      }}
    >
      {(props) => (
        <FormUserContainer>
          <label htmlFor="nome">Nome:</label>
          <FormUserField
            id="nome"
            name="nome"
            placeholder="Digite o nome"
            required
          />
          <ErrorMessage name="nome" />
          <label htmlFor="email">Email:</label>
          <FormUserField
            id="email"
            name="email"
            placeholder="Digite o e-mail"
            type="email"
            required
          />
          <ErrorMessage name="email" />
          <label htmlFor="dataNascimento">Data de nascimento:</label>
          <FormUserField
            mask="99/99/9999"
            id="dataNascimento"
            name="dataNascimento"
            placeholder="00/00/0000"
            required
          />
          <label htmlFor="cpf">CPF:</label>
          <FormUserField
            mask="999.999.999-99"
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
            required
          />
          <ButtonForm color="#3751FF" type="submit">
            Enviar
          </ButtonForm>
        </FormUserContainer>
      )}
    </Formik>
  );
};
export default FormUser;
