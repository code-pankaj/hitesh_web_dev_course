function Person(name, age){
    this.name = name
    this.age = age
}

// These both are constructor functions

function Car(make, model){
    this.make = make // R.H.S make is the argument which passed and this.make is the variable we will use 
    this.model = model
}

// we generally use same name like make - make because we are going to create copies of this constructor function after converting it into a class.

let myCar = new Car("Toyota", "Camry") // we have to use 'new' keyword in order to get the output because it creates a object and then 'this' keyword in that constructor function gives context that we are talking about those variables which creates a copy.

console.log(myCar)

let myNewCar = Car("Tata", "Safari")

console.log(myNewCar)

let newUser = new Person("Pankaj", 19)

console.log(newUser);

function Tea(type){
    this.type = type 
    this.describe = function(){
        return `Hi, I am drinking ${this.type}`
    }
}

let typeOfTea = new Tea("Black Tea")

console.log(typeOfTea)

console.log(typeOfTea.describe())

function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){ // here we use prototype property to add a new variable in the constructor function
    return `This ${this.species} makes sound.`
}

let dog = new Animal("Labra Dog")

let cat = new Animal("cat")

console.log(dog)

console.log(cat)

console.log(dog.sound())

console.log(cat.sound())

function Drink(name){
    if(!new.target){ 
        throw new Error("Function not called with 'new' keyword.") // throw is used to add some exception in the code 
    }
    this.name = name
}

let Juice = new Drink("Mango Juice")

let Shake = Drink("Mango Shake") // here we didn't use new so it will show the upper exception error


console.log(Juice)

console.log(Shake)