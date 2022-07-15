"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let resultado = 0;
function somarAoSaldo(soma) {
    if (campoSaldo) {
        resultado += soma;
        campoSaldo.innerHTML = resultado.toString();
    }
}
function limparCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    if (campoSaldo) {
        let saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
