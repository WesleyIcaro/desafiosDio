const pessoa = {
  nome: 'Wesley',
  idade: 24,
  profissao: 'TI'
}

pessoa.idade = 23;

const andre: { nome: string, idade: number, profissao: string } = {
  nome: 'Andre',
  idade: 24,
  profissao: 'Desenvolvedor'
}

const yasmim: { nome: string, idade: number, profissao: string } = {
  nome: 'Yasmim',
  idade: 15,
  profissao: 'Aprendiz'
}

enum cargo {
  Professoar,
  Advogado,
  Desenvolvedor,
  Policial
}

const Daniel: { nome: string, idade: number, profissao: string } = {
  nome: 'Daniel',
  idade: 14,
  profissao: 'vagabundo'
}


interface Pessoa {
  nome: string,
  idade: number,
  profissao?: cargo
}

const Gabriel: Pessoa = {
  nome: 'Gabriel',
  idade: 21,
  profissao: cargo.Desenvolvedor
}

interface estudantes extends Pessoa {
  materias: string[]
}

const Hadassa: estudantes = {
  idade: 18,
  nome: 'Hadassa',
  profissao: cargo.Policial,
  materias: ['matemática', 'Português']
}

const Luana: estudantes = {
  idade: 18,
  nome: 'Luana',
  materias: ['Fisíca', 'Português']
}

function materiasEscola(lista: string[]) {
  for (const item of lista) {
    console.log('- ', item)
  }
}

materiasEscola(Luana.materias)