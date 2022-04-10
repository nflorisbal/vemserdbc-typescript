import { AddressesDTO } from '../../model/AddressDTO';
import { ButtonForm } from '../buttonform/ButtonForm.styles';
import { ButtonsList, LineList } from './ListAddresses.styles';

const ListAddresses = ({ addresses }: AddressesDTO) => {
  const handleUpdate = (id: number) => {};
  const handleRemove = (id: number) => {};

  return (
    <>
      {addresses.map((address) => (
        <LineList key={address.idEndereco}>
          <div>{address.logradouro}</div>
          <div>{address.cidade}</div>
          <div>{address.cep}</div>
          <div>{address.tipo}</div>
          <ButtonsList>
            <ButtonForm
              onClick={() => {
                handleUpdate(address.idEndereco);
              }}
              color="#29CC97"
            >
              Atualizar
            </ButtonForm>
            <ButtonForm
              onClick={() => {
                handleRemove(address.idEndereco);
              }}
              color="#F12B2C"
            >
              Remover
            </ButtonForm>
          </ButtonsList>
        </LineList>
      ))}
    </>
  );
};

export default ListAddresses;
