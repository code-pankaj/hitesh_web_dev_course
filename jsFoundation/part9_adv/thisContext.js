const person = {
    name: "Pankaj",
    greet(){
        console.log(`Hi, I am ${this.name}`); 
    }
}

person.greet();

const greetFunction = person.greet // no context passed

greetFunction();

const boundGreet = person.greet.bind({name: "John"}) // context bind 

boundGreet();

// we can use bind, call and apply for binding context