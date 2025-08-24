const person = {
    name: 'Hossain',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true, 
    'fav places': ['bandorban', 'beach']
}

// console.log(person);

// dot notation, dot symbol diye object value access kora
// console.log(person.profession);
const income = person.salary;
// console.log(income)

// bracket notation
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

console.log(person['fav places'])
