const mobile ={
    brand: 'sausung',
    price: 34535,
    color: 'black',
    camera: '12mp',
    isNew: true
}
// for of: array
// for in: object
for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}