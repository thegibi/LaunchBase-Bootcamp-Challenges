
const name = "Evandro";
const weight = 79;
const height = 1.75;
const gander = "M";

const imc = weight / ( height * height);

let message = '';

if(imc >= 30) {
    message = `${name}, sorry! You are overweight.`;
} else {
    message = `${name}, Congrats! You are underweight.`;
}

console.log(message);
