export interface UsersDTO {
  users: {
    cpf: string;
    dataNascimento: string;
    email: string;
    idPessoa: number;
    nome: string;
  }[];
}

export interface AddUserDTO {
  nome: string;
  dataNascimento: string;
  cpf: string;
  email: string;
}
