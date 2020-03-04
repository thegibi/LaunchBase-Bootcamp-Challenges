// Calcular a aposentadoria.
// Crie um programa para calcular a aposentadoria de uma pessoa.

const name = "João";
const gender = "M";
const age = 60;
const contribution = 35;

const resultContribution = age + contribution;

const man = gender == 'M' && contribution >= 35 && resultContribution >= 95;
const woman = gender == 'F' && contribution >= 30 && resultContribution >= 85;

if(man || woman) {
    console.log(`${name}, você pode se aposentar.`)
} else {
    console.log(`${name}. você não pode se aposentar.`)
}
