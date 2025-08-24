const person = {
    name: 'Hossain',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true, 
    'fav places': ['bandorban', 'beach']
}

person.salary = 30000;
person['age'] = 27;
person['fav places'] = ['maldives', 'bail']

const propName  = 'profession';
person[propName]= 'devops'

console.log(person)

const keyName = 'profession';
console.log(person[keyName])