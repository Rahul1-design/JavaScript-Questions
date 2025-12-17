// Challenge 6: Reverse a String
// Write a function that takes a string and returns it reversed.
// reverseString("JavaScript");
// // Should return: "tpircSavaJ"

// function reverseString(string){
//     string = string.split("");
//     let reverse = string.reverse();
//     console.log(reverse.join(''))
// }
// reverseString("Rahul")

// shorter Version
function reverseString(string){
    return string.split("").reverse().join('');
}
console.log(reverseString("Rahul Shrestha"))