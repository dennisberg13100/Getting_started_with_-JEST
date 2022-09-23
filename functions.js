const functions = {
    sum: (a, b) => a + b,
    addAtribute: (obj, attr, value) => obj[attr] = value,
    returnNull: () => null,
    returnZero: () => 0, 
    myName: () => 'Dennis', 
    shoppingList: () => ['diapers', 'kleenes', 'trash bags', 'paper towels', 'milk'],
    bug: () => {throw new Error('Here we have a bug!')}
}

module.exports = functions