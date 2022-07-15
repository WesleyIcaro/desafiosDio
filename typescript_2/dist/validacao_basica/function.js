"use strict";
function oCoitado(tipo1, tipo2) {
    console.log(tipo1 + tipo2);
}
// console.log(oCoitado(99, 14569))
function somaDeDoisNumeros(valor1, valor2, callback) {
    let resultado = valor1 + valor2;
    return callback(resultado);
}
function potencia(numero1) {
    return numero1 * numero1;
}
function divisaoPorEleMesmo(numero1) {
    return numero1 / numero1;
}
console.log(somaDeDoisNumeros(5, 9, potencia));
console.log(somaDeDoisNumeros(5, 9, divisaoPorEleMesmo));
