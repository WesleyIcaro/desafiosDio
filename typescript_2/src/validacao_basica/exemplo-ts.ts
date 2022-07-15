let inputUm = document.getElementById('input') as HTMLInputElement

let inputDois = document.getElementById('input2') as HTMLInputElement

let buttonUm = document.getElementById('button')

function somaNumeros2(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
  let resultado = numero1 + numero2
  if (devePrintar) {
    // console.log(`${frase} ${numero1 + numero2}`)
    console.log(frase + resultado)
  }
  return numero1 + numero2
}

let devePrintar = true;
let frase = 'O valor é: '


if (buttonUm) {
  buttonUm.addEventListener('click', () => {
    if (inputUm && inputDois) {
      somaNumeros2(Number(inputUm.value), Number(inputDois.value), devePrintar, frase)
    }
  })
}