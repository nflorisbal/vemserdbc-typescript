import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LoginDTO } from '../../model/LoginDTO';
import {
  ContainerLogin,
  DivLogin,
  DivForm,
  TitleLogin,
  InputForm,
  LabelLogin,
  BtnForm,
  ImgLogin,
} from './Login.styles';

const Login = () => {
  const { haveToken, handleLogin, navigate } = useContext<any>(AuthContext);

  useEffect(() => {
    if (haveToken()) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerLogin>
      <DivLogin>
        <ImgLogin />
        <TitleLogin>Log In</TitleLogin>
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
              <LabelLogin htmlFor="usuario">Username</LabelLogin>
              <Field
                name="usuario"
                id="usuario"
                placeholder="Insert your username"
                as={InputForm}
              />
            </DivForm>
            <DivForm>
              <LabelLogin htmlFor="senha">Password</LabelLogin>
              <Field
                type="password"
                name="senha"
                id="senha"
                placeholder="Insert your password"
                as={InputForm}
              />
            </DivForm>
            <BtnForm type="submit">Log In</BtnForm>
          </Form>
        </Formik>
      </DivLogin>
    </ContainerLogin>
  );
};

export default Login;
