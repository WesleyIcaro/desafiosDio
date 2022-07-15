let emprego: {
  code: number;
  name: string;
}

interface colaborador {
  code: number;
  name: string;
}

let trampador: colaborador = {
  code: 10,
  name: 'Jhon'
}


let employe: { code: number, name: string } = {
  code: 10,
  name: 'Jhon'
}

let bosta = {} as colaborador;
bosta.code = 10
bosta.name = 'Jhon'

bosta = {
  code: 10,
  name: 'Jhon'
}
