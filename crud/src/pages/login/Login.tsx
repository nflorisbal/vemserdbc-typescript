import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { LoginDTO } from '../../model/LoginDTO';
import Logo from '../../components/logo/Logo';
import {
  ContainerLogin,
  DivLogin,
  DivForm,
  TitleLogin,
  InputForm,
  LabelLogin,
} from './Login.styles';
import { Button } from '../../components/button/Button.styles';

const Login = () => {
  const { haveToken, handleLogin } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (haveToken()) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerLogin>
      <DivLogin>
        <Logo />
        <TitleLogin>Acesso ao sistema</TitleLogin>
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
              <LabelLogin htmlFor="usuario">Usuário</LabelLogin>
              <Field
                name="usuario"
                id="usuario"
                placeholder="Insira seu usuário"
                as={InputForm}
              />
            </DivForm>
            <DivForm>
              <LabelLogin htmlFor="senha">Senha</LabelLogin>
              <Field
                type="password"
                name="senha"
                id="senha"
                placeholder="Insira sua senha"
                as={InputForm}
              />
            </DivForm>
            <Button type="submit" width="100%" height="48px">
              Entrar
            </Button>
          </Form>
        </Formik>
      </DivLogin>
    </ContainerLogin>
  );
};

export default Login;
