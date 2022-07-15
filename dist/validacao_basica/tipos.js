"use strict";
function definindo(entrada1, entrada2) {
    if (typeof entrada1 === 'string' || typeof entrada2 === 'string') {
        return entrada1.toString() + entrada2.toString();
    }
    else {
        return entrada1 + entrada2;
    }
}
console.log(definindo('Bom dia,', ' tudo bem?'));
console.log(definindo(3, 7));
console.log(definindo('7', 5));
