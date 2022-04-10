import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';
import { useContext } from 'react';
import { AddressContext } from '../../context/AddressContext';
import { AddressDTO } from '../../model/AddressDTO';
import {
  FormAddressContainer,
  FormAddressError,
  FormAddressField,
  FormAddressLabel,
} from './FormAddress.styles';
import { ButtonForm } from '../buttonform/ButtonForm.styles';

const REQUIRED_FIELD_MSG = 'Campo obrigatório.';

const FORM_INITIAL_VALUES = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
};

const addressSchema = Yup.object().shape({
  cep: Yup.string().required(REQUIRED_FIELD_MSG),

  logradouro: Yup.string().required(REQUIRED_FIELD_MSG),

  complemento: Yup.string(),

  bairro: Yup.string().required(REQUIRED_FIELD_MSG),

  localidade: Yup.string().required(REQUIRED_FIELD_MSG),

  uf: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .min(2, 'Mínimo 2 caracteres.')
    .max(2, 'Máximo 2 caracteres.'),

  pais: Yup.string().required(REQUIRED_FIELD_MSG),

  tipo: Yup.string().required(REQUIRED_FIELD_MSG),
});

const FormAddress = () => {
  const { getViaCepAddress, addAddress } = useContext<any>(AddressContext);

  const handleSubmit = async (values: AddressDTO, actions: any) => {
    addAddress(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={addressSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ values, setFieldValue, isValid, dirty }) => (
        <FormAddressContainer>
          <FormAddressLabel htmlFor="cep">CEP</FormAddressLabel>
          <div>
            <Field
              as={FormAddressField}
              mask="99999-999"
              name="cep"
              placeholder="00000-000"
            />
            <ButtonForm
              type="button"
              color="#3751FF"
              onClick={() => getViaCepAddress(values, setFieldValue)}
            >
              Buscar
            </ButtonForm>
          </div>
          <ErrorMessage component={FormAddressError} name="cep" />
          <FormAddressLabel htmlFor="logradouro">Logradouro</FormAddressLabel>
          <Field
            as={FormAddressField}
            name="logradouro"
            placeholder="Digite o logradouro"
          />
          <ErrorMessage component={FormAddressError} name="logradouro" />
          <FormAddressLabel htmlFor="complemento">Complemento</FormAddressLabel>
          <Field
            as={FormAddressField}
            name="complemento"
            placeholder="Digite o complemento"
          />
          <ErrorMessage component={FormAddressError} name="complemento" />
          <FormAddressLabel htmlFor="bairro">Bairro</FormAddressLabel>
          <Field
            as={FormAddressField}
            name="bairro"
            placeholder="Digite o bairro"
          />
          <ErrorMessage component={FormAddressError} name="bairro" />
          <FormAddressLabel htmlFor="localidade">Cidade</FormAddressLabel>
          <Field
            as={FormAddressField}
            name="localidade"
            placeholder="Digite a cidade"
          />
          <ErrorMessage component={FormAddressError} name="localidade" />
          <FormAddressLabel htmlFor="uf">UF</FormAddressLabel>
          <Field as={FormAddressField} name="uf" placeholder="Digite a UF" />
          <ErrorMessage component={FormAddressError} name="uf" />
          <ButtonForm color="#3751FF" type="submit">
            Enviar
          </ButtonForm>
        </FormAddressContainer>
      )}
    </Formik>
  );
};
export default FormAddress;
