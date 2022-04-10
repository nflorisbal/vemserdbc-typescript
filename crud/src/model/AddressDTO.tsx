export interface AddressesDTO {
  addresses: {
    cep: string;
    cidade: string;
    complemento?: string;
    estado: string;
    idEndereco: number;
    logradouro: string;
    numero: number;
    pais: string;
    tipo: string;
  }[];
}

export interface AddressDTO {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
}
