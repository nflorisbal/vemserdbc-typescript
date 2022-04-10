import axios from 'axios';
import { Loading } from 'notiflix';
import { createContext, FC, ReactNode, useState } from 'react';
import { AddressDTO } from '../model/ViaAddressDTO';
import Api from '../services/Api';

export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  const getViaCepAddress = async (values: AddressDTO, setFieldValue: any) => {
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

  const getAddresses = async () => {
    try {
      const { data } = await Api.get('/endereco');
      console.log(data);
      setAddresses(data);
      Loading.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddressContext.Provider value={{ addresses, getAddresses, getViaCepAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
