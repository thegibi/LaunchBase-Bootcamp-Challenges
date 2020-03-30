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

console.log(`The user ${programer.name} is ${programer.age} years old, 
works with ${object.proprietary[0].name}, an expert in ${object.proprietary[0].skills}.`);
