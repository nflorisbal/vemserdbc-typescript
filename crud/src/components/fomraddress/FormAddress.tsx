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
  FormAddressSelect,
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
  tipo: 'RESIDENCIAL',
};

const addressSchema = Yup.object().shape({
  cep: Yup.mixed().required(REQUIRED_FIELD_MSG),

  logradouro: Yup.string().required(REQUIRED_FIELD_MSG),

  complemento: Yup.string(),

  bairro: Yup.string().required(REQUIRED_FIELD_MSG),

  localidade: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/, 'Deve conter apenas letras.'),

  uf: Yup.string()
    .required(REQUIRED_FIELD_MSG)
    .min(2, 'Mínimo 2 caracteres.')
    .max(2, 'Máximo 2 caracteres.')
    .matches(/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/, 'Deve conter apenas letras.'),
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
              required
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
          <div>
            <FormAddressLabel htmlFor="uf">UF </FormAddressLabel>
            <Field
              as={FormAddressField}
              name="uf"
              placeholder="Digite o estado "
            />
            <ErrorMessage component={FormAddressError} name="uf" />

            <FormAddressLabel htmlFor="tipo">Tipo </FormAddressLabel>
            <Field as={FormAddressSelect} name="tipo">
              <option value="RESIDENCIAL">Residencial</option>
              <option value="COMERCIAL">Comercial</option>
            </Field>
            <ErrorMessage component={FormAddressError} name="tipo" />
          </div>
          <ButtonForm
            disabled={!isValid || !dirty}
            color="#3751FF"
            type="submit"
          >
            Enviar
          </ButtonForm>
        </FormAddressContainer>
      )}
    </Formik>
  );
};
export default FormAddress;
