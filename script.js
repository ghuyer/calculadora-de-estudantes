//criar lista de estudantes com nome, nota da primeira prova, e nota da segunda prova

//criar função para calcular a média de cada aluno

//informar se o aluno passou de ano ou não

//média de escola é 7

let list = [
  personOne = {
    name: "Ilmo",
    testOne: 8,
    testTwo: 5,
  },
  personTwo = {
    name: "Gandolfo",
    testOne: 7,
    testTwo: 10,
  },
  personThree = {
    name: "Galícia",
    testOne: 6,
    testTwo: 9,
  },
  personFour = {
    name: "Grimma",
    testOne: 2,
    testTwo: 5,
  },
];

let average = 7;

// let mathOne = (list[0].testOne + list[0].testTwo) / 2;
// let mathTwo = (list[1].testOne + list[1].testTwo) / 2;
// let mathThree = (list[2].testOne + list[2].testTwo) / 2;
// let mathFour = (list[3].testOne + list[3].testTwo) / 2;

//Eu sei que este é o jeito não-prático, mas primeiro vou ver se funciona. Depois tento recriar o jeito inteligente (procurando ajuda se precisar - tenho certeza que vou precisar, pois não lembro partes da lógica).

//Opa, e não é que parece que eu lembrei sem precisar checar nenhuma anotação? Vamos ver se funciona antes de comemorar:

function math(person) {
  let calculation = (person.testOne + person.testTwo) / 2;
  if (calculation >= average) {
    alert(`Parabéns, ${person.name}! Sua nota final foi de ${calculation}. Você foi aprovad@!`);
  } else {
    alert(`Sinto muito, ${person.name}. Sua nota final ficou abaixo da média. Mais sorte da próxima vez.`)
  }
};

for (let person of list) {
  math(person)
};

//Deu certo! Ou quase. Eu tinha feito FOR/IN e não FOR/OF. Mas este foi o único erro. Aplicação funcionou direitinho.