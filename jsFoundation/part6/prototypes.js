let computer = {
    cpu: 12,
    screen: "OLED"
}
let asus = {
    screen: "HD",
    ram: 16
}
let mac = {
    __proto__: asus,
    // __proto__: computer

    // I learned by this that we can only use 1 __proto__ in an object not more than that it will only point to one protoype 
    
    // In JavaScript, an object can have only one prototype that it directly inherits from.
}

console.log(`computer`, computer.__proto__)
console.log(`asus`, asus.__proto__)
console.log(`mac`, mac.__proto__)


let genericCar = {
    fuel: "disel"
}

let tesla = {
    fuel: "electricity"
}

Object.setPrototypeOf(tesla, genericCar)

console.log(Object.hasOwn(tesla, "fuel")) // it will result true as the "fuel" property of genericCar is shadowed by the tesla "fuel" property.


const car = Object.create(genericCar)

console.log(car.fuel);
console.log(car);
console.log(`tesla`, Object.getPrototypeOf(tesla))
console.log(`genericCar`, Object.getPrototypeOf(genericCar))

// __proto__ is old 
// Use Object.create() for creating objects with a prototype.
// Use Object.getPrototypeOf() and Object.setPrototypeOf() for getting and setting prototypes.

