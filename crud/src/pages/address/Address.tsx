import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { AddressDTO } from '../../model/AddressDTO';
import { Container } from '../../components/container/Container.styles';
import Api from '../../services/Api';

const Address = () => {
  const { haveToken } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  const getAddress = async (values: AddressDTO, setFieldValue: any) => {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${values.cep}/json/`
      );
      setFieldValue('logradouro', data.logradouro);
      setFieldValue('bairro', data.bairro);
      setFieldValue('localidade', data.localidade);
      setFieldValue('uf', data.uf);
    } catch (error) {
      console.log(error);
    }
  };

  const sendAddress = async (values: AddressDTO) => {
    const newAddress = {};
    try {
      const { data } = await Api.post('', newAddress);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!haveToken()) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{
          cep: '',
          logradouro: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
        }}
        onSubmit={(values: AddressDTO) => {
          sendAddress(values);
        }}
      >
        {(props) => (
          <Form>
            <label htmlFor="cep">CEP</label>
            <Field id="cep" name="cep" placeholder="Digite o CEP" />
            <button
              type="button"
              onClick={() => getAddress(props.values, props.setFieldValue)}
            >
              Buscar CEP
            </button>
            <label htmlFor="logradouro">Logradouro</label>
            <Field
              id="logradouro"
              name="logradouro"
              placeholder="Digite o logradouro"
            />
            <label htmlFor="complemento">Complemento</label>
            <Field
              id="complemento"
              name="complemento"
              placeholder="Digite o complemento"
            />
            <label htmlFor="bairro">Bairro</label>
            <Field id="bairro" name="bairro" placeholder="Digite o bairro" />
            <label htmlFor="localidade">Cidade</label>
            <Field
              id="localidade"
              name="localidade"
              placeholder="Digite a cidade"
            />
            <label htmlFor="uf">UF</label>
            <Field id="uf" name="uf" placeholder="Digite a UF" />

            <button type="submit">Adicionar</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Address;
