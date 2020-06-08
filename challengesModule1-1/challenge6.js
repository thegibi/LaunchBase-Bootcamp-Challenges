// USERS AND TECHNOLOGIES
const users = [
    { 
        name: 'Carlos',
        techs: ['HTML', 'CSS'],
    },
    {
        name: 'Jasmine',
        techs: ['JAVASCRIPT', 'CSS'],
    },
    {
        name: 'Tuane',
        techs: ['HTML', 'NODE'],
    },
];  
//FINDING FOR TECHNOLOGIES
function checkCssUsers(user) {
    for(let tech of user.techs) {
        if(tech == 'CSS') 
            return true 
    }
        return false
}
 for(let i=0; i < users.length; i++) {
     const userCssTech = checkCssUsers(users[i])

     if(userCssTech) {
         console.log(`The ${users[i].name}, works with CSS.`)
     }
 }
