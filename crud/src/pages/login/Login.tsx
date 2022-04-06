import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LoginDTO } from '../../model/LoginDTO';
import { ContainerLogin, DivForm, TitleLogin } from './Login.styles';

const Login = () => {
  const { handleLogin } = useContext<any>(AuthContext);

  return (
    <ContainerLogin>
      <TitleLogin>Login</TitleLogin>
      <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
        ) => {
          handleLogin(values);
        }}
      >
        <Form>
          <DivForm>
            <label htmlFor="usuario">Usuário</label>
            <Field
              name="usuario"
              id="usuario"
              placeholder="Digite seu usuário"
            />
          </DivForm>
          <DivForm>
            <label htmlFor="senha">Senha</label>
            <Field name="senha" id="senha" placeholder="Digite seu senha" />
          </DivForm>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </ContainerLogin>
  );
};

export default Login;
