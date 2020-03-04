// Arrays / Vetores

const programer = {
    name: "Carlos",
    age: 32,
    techs: "C++, PYTHON"
};

const object = {
proprietary: [
    { 
        name: "C++",
        skills: "DESKTOP", 
    },
    {
        name: "PYTHON", 
        skills: "DATA SCIENCE",
    },
    {
        name: "JAVASCRIPT",
        skills: "WEB/MOBILE"
    }
]
}

console.log(`O usuário ${programer.name} tem ${programer.age} anos, 
e trabalha com a tecnologia ${object.proprietary[0].name} com especialidade em ${object.proprietary[0].skills}.`);
