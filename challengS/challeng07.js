// NAME, INCOMES AND EXPENSES OF THE USERS
const users = [
    {
        name: "Silvio",
        incomes: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        incomes: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        incomes:  [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    },
];
 // ACCONTS BALANCE OF THE "INCOMES AND EXPENSES", 
 // AND THE SUBTRACTION OF THE INCOMES AMOUNT AND EXPENSES AMOUNT
function accontsBalance(incomes, expenses) {
    const incomesAmount = numbersAmount(incomes)
    const expensesAmount = numbersAmount(expenses)

    return incomesAmount - expensesAmount
}
 // AMOUNT OF THE NUMBERS TO RESUL THE BALANCE POSITIVO OR NEGATIVO
function numbersAmount(numbers) {
    let amount = 0

    for(let number of numbers) {
        amount = amount + number
    }

    return amount
}
// SHOW TO THE USERS IF YOUR BALANCE IS POSITIVO OR NEGATIVO
for(let user of users) {
    const balance = accontsBalance(user.incomes, user.expenses)

        if(balance > 0) {
            console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
        } else {
            console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
        }
}
