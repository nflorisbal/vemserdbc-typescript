import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { AddUserDTO } from '../../model/AddUserDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';

const FormUser = () => {
  const { addUser } = useContext<any>(UserContext);

  const userSchema = Yup.object({
    nome: Yup.string()
      .min(2, 'No mínimo 2 caracteres.')
      .max(50, 'No máximo 50 caracteres.')
      .required('Campo obrigatório.'),
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
        <Form>
          <label htmlFor="nome">Nome:</label>
          <Field id="nome" name="nome" placeholder="Digite o nome" />
          <ErrorMessage name="nome"/>
          <label htmlFor="email">Email:</label>
          <Field
            id="email"
            name="email"
            placeholder="Digite o e-mail"
            type="email"
          />
          <label htmlFor="dataNascimento">Data de nascimento:</label>
          <Field
            mask="99/99/9999"
            id="dataNascimento"
            name="dataNascimento"
            placeholder="00/00/0000"
          />
          <label htmlFor="cpf">CPF:</label>
          <Field
            mask="999.999.999-99"
            id="cpf"
            name="cpf"
            placeholder="000.000.000-00"
          />
          <ButtonForm color="#3751FF" type="submit">Enviar</ButtonForm>
        </Form>
      )}
    </Formik>
  );
};
export default FormUser;
