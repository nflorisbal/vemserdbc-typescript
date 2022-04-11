import axios from 'axios';
import { Loading, Notify } from 'notiflix';
import { createContext, FC, ReactNode, useState } from 'react';
import { AddressDTO, AddressesDTO } from '../model/AddressDTO';

import Api from '../services/Api';

export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = async (values: AddressDTO) => {
    const newAddress = {
      cep: values.cep.replace('-', ''),
      cidade: values.localidade,
      complemento: values.complemento,
      estado: values.uf,
      logradouro: values.logradouro,
      numero: 1,
      pais: 'Brasil',
      tipo: values.tipo,
    };

    try {
      await Api.post('/endereco/1', newAddress);
      Notify.success('Endereço adicionado com sucesso.');
      getAddresses();
    } catch (error) {
      console.log(error);
    }
  };

  const removeAddress = async (id: number) => {
    try {
      await Api.delete(`/endereco/${id}`);
      getAddresses();
    } catch (error) {
      console.log(error);
    }
  };

  const getAddresses = async () => {
    try {
      const { data } = await Api.get('/endereco');
      sortAddresses(data);
      setAddresses(data);
      Loading.remove();
    } catch (error) {
      console.log(error);
    }
  };

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

  const sortAddresses = (data: AddressesDTO[]) => {
    data.sort((a: any, b: any) => {
      return b.idEndereco - a.idEndereco;
    });
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        removeAddress,
        getAddresses,
        getViaCepAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
