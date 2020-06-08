
const name = "João";
const gender = "M";
const age = 50;
const contribution = 35;

const contributionResult = age + contribution;

const man = gender == 'M' && contribution >= 35 && contributionResult >= 95;
const woman = gender == 'F' && contribution >= 30 && contributionResult >= 85;

if(man || woman) {
    console.log(`${name}, yeh! You can retire.`)
} else {
    console.log(`${name}, oh no! You cannot retire.`)
}
