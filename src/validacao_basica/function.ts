function oCoitado(tipo1: number, tipo2: number): void {
  console.log(tipo1 + tipo2)
}

// console.log(oCoitado(99, 14569))

function somaDeDoisNumeros(valor1: number, valor2: number, callback: (numero: number) => number): number {
  let resultado = valor1 + valor2
  return callback(resultado)
}

function potencia(numero1: number) {
  return numero1 * numero1
}

function divisaoPorEleMesmo(numero1: number) {
  return numero1 / numero1
}

console.log(somaDeDoisNumeros(5, 9, potencia))
console.log(somaDeDoisNumeros(5, 9, divisaoPorEleMesmo))