function sayHello() {
    console.log("I would like to say Hello");
  }
  
  setTimeout(() => {
    sayHello();
  }, 4000);
  
// here js doesn't follow the sync he just execute the code which is after the timer function

  console.log("chaicode");
  
  for (let index = 0; index < 10; index++) {
    console.log(index);
  }