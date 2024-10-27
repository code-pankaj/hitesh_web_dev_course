// Number

let balance = 100;
let anotherBalance = new Number(120);

console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true) // not recommended

// Null & Undefined

let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

//String

let myString = "hello";
let secondString = "hola";
let username = 'pankaj';

let oldGreet = myString + " pankaj";
console.log(oldGreet);

let greetMessage = `Hello ${username}!`;
console.log(greetMessage);

// Symbol

let sym1 = Symbol("pankaj");
let sym2 = Symbol("pankaj");

console.log(sym1);

