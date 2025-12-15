// Ready for Challenge 2? This one will help you practice array manipulation and filtering logic - super common in real projects:
// Challenge 2: Remove Duplicates
// Write a function that takes an array and returns a new array with all duplicate values removed.
// Example:
// javascriptremoveDuplicates([1, 2, 2, 3, 4, 4, 5]) 
// // Should return: [1, 2, 3, 4, 5]


// function removeDuplicate(num) {
//     if(Array.isArray(num)){
//         let number = new Set()
//         for(let a of num ){
//             number.add(a)
//         }
//         console.log(number)
//     }
//     else{
//         console.log(`${num} is not an array`)
//     }
// }

// removeDuplicate("Rahul")
// removeDuplicate([1,2,3,3,5,7,7])


function Duplicate(array) {
    let letter = [];
    for(let a of array) {
        if(!letter.includes(a)){
            letter.push(a)
        }
    }
    console.log(letter)
}

Duplicate("Rahul")
Duplicate([1,2,3,3,5,7,7])
