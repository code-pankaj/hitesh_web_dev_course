let car = {
    make: "Toyota",
    model: "Camry",
    year: 2025,
    start: function(){
        return `${this.make} made a model of ${this.model} in ${this.year}.`
    }
}

console.log(car.start());

function Person(name, age){
    this.name = name
    this.age = age
}

let userOne = new Person("John Doe", 25)

console.log(userOne)

console.log(userOne.name)

class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    details(){
        return `${this.make} company makes ${this.model} model cars also.`
    }
}

// Functions inside a class are reffered as method and they didn't need 'function' keyword while declaring a function.

class Data extends Vehicle{ // extends keyword help in inheriting the existing class into a new one.
    test(){
        return `${this.model} is owned by ${this.make}. <-- this is an example of inheritance`
    }
}

let myCar = new Data("Tata", "Safari")

console.log(myCar)
console.log(myCar.test())
console.log(myCar.details())

// Encapsulation --> Restricting direct access to data object.

class BankAccount{
    #balance = 0

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    withdraw(amount){
        this.#balance -= amount
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance}`
    }
}

let accountOne = new BankAccount()

console.log(accountOne)

console.log(accountOne.deposit(1000));

console.log(accountOne.getBalance())

console.log(accountOne.withdraw(500));

console.log(accountOne.getBalance());



// Abstraction --> the concept of hiding complex implementation details and showing only the essential features or functionalities of an object or module to the user


class CoffeeMachine{
    mix(){
        return `Adding Sugar In Water...`
    }
    brew(){
        return `Brewing Coffee...`
    }
    start(){
        let msgOne = this.mix()
        let msgTwo = this.brew()
        return `${msgOne} ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine()

console.log(myMachine.start());


// Polymorphism --> The ability of a method, function, or object to behave differently based on the context or the object it is working with.


class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguin's can't fly.`;
    }

    parentFly() {
        return super.fly(); // Explicitly call the parent class method
        // super keyword used to call the parent function.
    }
}

let birdOne = new Bird();
let birdTwo = new Penguin();

console.log(birdOne.fly());
console.log(birdTwo.fly());         
console.log(birdTwo.parentFly());  

class Calculator{
    static add(a, b){ // by adding static keyword the functio can only be used by the class only.
        return a + b
    }
}

// let sum = new Calculator()

// console.log(sum.add(1,3));

console.log(Calculator.add(2,3));

class Employee{
    #salary = 0;
    constructor(name, salary){
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return this.#salary;
    }
    set salary(value){
        if(value < 0){
            console.error("Invalid Salary")
        }else{
            this.#salary = value;
        }
    }
}

let emp = new Employee("Steve", 50000)

console.log(emp.salary );

emp.salary = -1000;

console.log(emp.name);


