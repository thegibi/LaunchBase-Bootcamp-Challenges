
const name = "Evandro";
const weight = 79;
const height = 1.75;
const gander = "M";

const imc = weight / ( height * height);

let message = '';

if(imc >= 30) {
    message = `${name}, você está acima do peso.`;
} else {
    message = `${name}, você não está acima do peso.`;
}

console.log(message);
