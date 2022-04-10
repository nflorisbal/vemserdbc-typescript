import { AddressDTO } from '../../model/AddressDTO';
import { LineAddress } from './ListAddress.styles';

const ListAddress = ({ addresses }: AddressDTO) => {
  return (
    <>
      {addresses.map((address) => (
        <LineAddress key={address.idEndereco}>
          <div>{address.logradouro}</div>
          <div>{address.tipo}</div>
          <div>{address.cidade}</div>
          <div>{address.cep}</div>
        </LineAddress>
      ))}
    </>
  );
};

export default ListAddress;
