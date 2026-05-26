console.log(a); // undefined (not an error!)
var a = 5;

console.log(b); // ReferenceError: Cannot access before initialization
let b = 5;

var a; // hoisted to top
console.log(a); // undefined
a = 5;

// const doesn't mean truly immutable
const user = { name: "Rahul" };
user.name = "Ram"; //  this works
user = {}; //  TypeError — can't reassign the variable itself
// const prevents reassignment of the variable, not mutation of the object.
