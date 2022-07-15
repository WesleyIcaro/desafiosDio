let anyEstaDeVolta: any;
anyEstaDeVolta = 'true';
anyEstaDeVolta = 7;
anyEstaDeVolta = true;

let farinha: string = 'papa';
farinha = anyEstaDeVolta;

let prazerUnknown: unknown = true;
prazerUnknown = '753';
prazerUnknown = 9;
prazerUnknown = 'Oie UU'

let undefinede: string = 'mama';

if (typeof prazerUnknown === 'string')
  undefinede = prazerUnknown;

function byby(erro: string, codigo: number): never {
  throw { error: erro, code: codigo }
}

console.log(byby('Erro de aderência', 300))
