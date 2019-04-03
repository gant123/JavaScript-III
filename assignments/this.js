/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. New binding- binds "this", which is very powerful using objects.
* 2. Window binding- is the default state of "this"
* 3. Explicit binding- manually binds "this"
* 4. Implicit binding- binds the 'this' keyword to the object that is to the left of the function automatically
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
window.sayHello() = function() {
    'Hello World';
}

// Principle 2

// code example for Implicit Binding
let robert = {
  name: "Robert",
  age: 23,
  sayName: function() {
    console.log(`Hey, my name is ${this.name}`);
  }
};

let greg = {
  name: "Greg",
  age: 38,
  sayName: function() {
    console.log(`Hey, my name is ${this.name}`);
  }
};

robert.sayName();
greg.sayName();

// Principle 3

// code example for New Binding
function Animal(type, name, sound) {
  this.name = name;
  this.type = type;
  this.sound = sound;
}

const cat = new Animal("cat", "happy", "meow");
const dog = new Animal("dog", "sunshine", "bark");
console.log(cat);
console.log(dog);


// Principle 4

// code example for Explicit Binding
function sayHello() {
  console.log(
    `Hello, my name is ${this.name}. I am learning: ${this.languages}`
  );
}

let rob = {
  name: "Robert",
  age: "23",
  location: "TX",
  languages: ["HTML", "CSS", "JavaScript","C#", "SQL"]
};

sayHello.call(rob);