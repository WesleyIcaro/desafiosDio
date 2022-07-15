let pessoa1: { nome: string, idade: number, profissao: string } = {
  nome: "maria",
  idade: 29,
  profissao: "atriz"
}

interface pessoas {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa2 = {} as pessoas;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
  nome: 'wesley',
  idade: 23,
  profissao: 'String'
};

pessoa3.nome = 'oie'

let pessoa4 = {} as pessoas
pessoa4.nome = "carlos",
  pessoa4.idade = 19,
  pessoa4.profissao = "padeiro"
