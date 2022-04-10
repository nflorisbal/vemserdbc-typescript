import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { AddressContext } from '../../context/AddressContext';
import { AddressDTO } from '../../model/AddressDTO';
import Api from '../../services/Api';

const FormAddress = () => {
  const { getViaCepAddress } = useContext<any>(AddressContext);

  const sendAddress = async (values: AddressDTO) => {
    const newAddress = {};
    try {
      const { data } = await Api.post('', newAddress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
              onClick={() =>
                getViaCepAddress(props.values, props.setFieldValue)
              }
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
    </>
  );
};
export default FormAddress;
