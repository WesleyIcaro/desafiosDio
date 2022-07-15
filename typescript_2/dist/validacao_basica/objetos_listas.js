"use strict";
const pessoa = {
    nome: 'Wesley',
    idade: 24,
    profissao: 'TI'
};
pessoa.idade = 23;
const andre = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Desenvolvedor'
};
const yasmim = {
    nome: 'Yasmim',
    idade: 15,
    profissao: 'Aprendiz'
};
var cargo;
(function (cargo) {
    cargo[cargo["Professoar"] = 0] = "Professoar";
    cargo[cargo["Advogado"] = 1] = "Advogado";
    cargo[cargo["Desenvolvedor"] = 2] = "Desenvolvedor";
    cargo[cargo["Policial"] = 3] = "Policial";
})(cargo || (cargo = {}));
const Daniel = {
    nome: 'Daniel',
    idade: 14,
    profissao: 'vagabundo'
};
const Gabriel = {
    nome: 'Gabriel',
    idade: 21,
    profissao: cargo.Desenvolvedor
};
const Hadassa = {
    idade: 18,
    nome: 'Hadassa',
    profissao: cargo.Policial,
    materias: ['matemática', 'Português']
};
const Luana = {
    idade: 18,
    nome: 'Luana',
    materias: ['Fisíca', 'Português']
};
function materiasEscola(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
materiasEscola(Luana.materias);
