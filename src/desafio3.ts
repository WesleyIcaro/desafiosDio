let botaoAtualizar = document.getElementById('atualizar-saldo')
let botaoLimpar = document.getElementById('limpar-saldo')
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo')

let resultado = 0



function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        resultado += soma;
        campoSaldo.innerHTML = resultado.toString()
    }
}

function limparCampoSoma() {
    soma.value = ''
}

function limparSaldo() {
    if (campoSaldo) {
        let saldoTotal = 0
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}


botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});