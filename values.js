const computer = {
    brand: 'Acer',
    price: 40000,
    processor: 'intel',
    hdd: '512gb'
}

const values = Object.values(computer);
console.log(values)


const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'bijay dibos'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.result.merit = 'top top top!'

console.log(college.unique.color)
console.log(college.unique.result.merit)

college.events[1] = '16th december'
console.log(college.events[1])