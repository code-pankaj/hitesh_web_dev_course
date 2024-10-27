const username = {
    firstName: "pankaj",
    "logged in": true
};

console.log(username.firstName);

username.firstName = "Coder"
username.lastName = "Ultra Pro"

console.log(username.firstName);
console.log(username["logged in"])
console.log(username.lastName)
console.log(typeof username);

let time = new Date()
console.log(time)
console.log(time.getDate())

// Array

let anotherUser = ["ramesh", false]

console.log(anotherUser[0]);
console.log(anotherUser[1]);

// Type Conversion
console.log("1" + 2)
console.log(2 + "1")

let value = true;
console.log(value + 1)

