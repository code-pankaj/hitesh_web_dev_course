function* numberGenerator(){
    yield `Hello, World!`;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);