// Practice questions — write the code this time
// Q1: Given this array, return a new array with only the names of users who are active:
// jsconst users = [
//   { name: "Rahul", active: true },
//   { name: "Ram", active: false },
//   { name: "Sita", active: true },
//   { name: "Hari", active: false },
// ];

// expected output: ["Rahul", "Sita"]

const users = [
  { name: "Rahul", active: true },
  { name: "Ram", active: false },
  { name: "Sita", active: true },
  { name: "Hari", active: false },
];

const user = users
  .filter((item) => item.active === true)
  .map((item) => item.name);

console.log(user);

// Q2: Given this array, return the total salary of all employees:
// const employees = [
//   { name: "A", salary: 50000 },
//   { name: "B", salary: 30000 },
//   { name: "C", salary: 70000 },
// ];
// expected output: 150000

const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 30000 },
  { name: "C", salary: 70000 },
];

const sum = employees.map((item) => item.salary).reduce((a, b) => a + b);
console.log(sum);

// Q3: Given this array, return only jobs that have "developer" in the title (case insensitive), and return just their titles uppercased:
// const jobs = [
//   { title: "Frontend Developer" },
//   { title: "Graphic Designer" },
//   { title: "Backend Developer" },
//   { title: "Project Manager" },
// ];

const jobs = [
  { title: "Frontend Developer" },
  { title: "Graphic Designer" },
  { title: "Backend Developer" },
  { title: "Project Manager" },
];

const job = jobs
  .filter((item) => item.title.toLowerCase().includes("developer"))
  .map((item) => item.title);
console.log(job);
