// Users and technologies
const users = [
    {
        name: "Carlos",
        techs: ["HTML, CSS"],
    },
    {
        name: "Jasmine",
        techs: ["JAVASCRIPT, CSS"],
    },
    {
        name: "Tuane",
        techs: ["HTML, NODEJS"],
    }
];
 for (let user of users) {
     console.log(`The ${user.name}, works with ${user.techs.join(',')}.`)
 }
