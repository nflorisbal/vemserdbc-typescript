export interface AddressDTO {
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
