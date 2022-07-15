"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 'true';
anyEstaDeVolta = 7;
anyEstaDeVolta = true;
let farinha = 'papa';
farinha = anyEstaDeVolta;
let prazerUnknown = true;
prazerUnknown = '753';
prazerUnknown = 9;
prazerUnknown = 'Oie UU';
let undefinede = 'mama';
if (typeof prazerUnknown === 'string')
    undefinede = prazerUnknown;
function byby(erro, codigo) {
    throw { error: erro, code: codigo };
}
console.log(byby('Erro de aderência', 300));
