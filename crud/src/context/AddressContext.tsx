import { Loading } from 'notiflix';
import { createContext, FC, ReactNode, useState } from 'react';
import Api from '../services/Api';

export const AddressContext = createContext({});

const AddressProvider: FC<ReactNode> = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

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
    <AddressContext.Provider value={{ getAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
