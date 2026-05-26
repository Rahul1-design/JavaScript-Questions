// this doesn't mean same thing everywhere and this referes to whoever called the function

// const user = {
//   name: "Rahul",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// user.greet();  user called greet, so this = user

// const user = {
//   name: "rahul",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// const fc = user.greet;
// fc(); now the global object called it, not user

// Difference between call, apply, and bind
// In JavaScript, the this  keyword refers to an object. The this keyword refers to different objects depending on how it is used
// 1. Call
//  calls function immediatley.Arguments passed one by one.  Example:-

const person = {
  name: "rahul",
};

function greet(age) {
  console.log("My name is", this.name, "and my age is", age);
}

greet.call(person, 21);

// 2. apply
// same as call() but arguments passed as an array. Example:-

const another = {
  name: "sam",
};

function greet1(age) {
  console.log("This is second name:", this.name, "age:", age);
}

greet1.apply(another, [31]);

// 3. Bind:- Bind doesnt execute the function immediately but it returns the new function. Example

const last = {
  name1: "hari",
  name2: "ram",
};

function greet2(a1, a2) {
  console.log("This is the last name:", this.name1, "and age:", a1);
  console.log("This is the last name:", this.name2, "and age:", a2);
}

let newFunction = greet2.bind(last, 41, 50);

newFunction();
