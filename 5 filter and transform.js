// Challenge 3: Filter & Transform
// You have an array of user objects. Write a function that returns only users who are 18 or older, and return just their names (not the whole object).
// javascriptconst users = [
//     { name: "Rahul", age: 21 },
//     { name: "Priya", age: 17 },
//     { name: "Amit", age: 25 },
//     { name: "Sneha", age: 16 }
// ];

// Your function should return: ["Rahul", "Amit"]

// function User() {
//     let nam = []
//     let users = [
//     { name: "Rahul", age: 21 },
//     { name: "Priya", age: 17 },
//     { name: "Amit", age: 25 },
//     { name: "Sneha", age: 16 }
// ];
//     for(let user of users) {
//         if(user.age >= 18 ){
//             nam.push(user.name);
//         }
//     }
//     return nam;
// }
// let value = User()
// console.log(value) 

function User() {
    let users = [
    { name: "Rahul", age: 21 },
    { name: "Priya", age: 17 },
    { name: "Amit", age: 25 },
    { name: "Sneha", age: 16 }
    ];
    
    return users.filter(value=> value.age >=18).map(value => value.name)
    
}
console.log(User())