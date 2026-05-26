// Destructuring : it means extracting the data from the object , array .

const user = { name: "rahul", age: 21 };
const { name, age } = user; //destructuring
console.log(name, age);

const { name: Fullname } = user; //renaming while destructuring

//Spread Operator: it means expanding the array or object into individual term.
const arr = [1, 2, 3, 4];
const newArr = [...arr, 5];
console.log(newArr);

//Rest Operator: Opposite of spread operator. Rest operator means collecting the multiple data into one array.

function sum(...args) {
  return args.reduce((accum, curr) => accum + curr);
}

console.log(sum(1, 2, 3, 4, 5));

const job = { title: "Frontend Dev", salary: 50000 };

const updatedJob = { ...job, title: "Backend Developer" };
console.log(updatedJob);
