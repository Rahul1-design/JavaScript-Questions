// Challenge 8: Find Missing Number
// You have an array of numbers from 1 to N, but ONE number is missing. Find it!
// findMissing([1, 2, 4, 5]);
// // Should return: 3

function missingNumber(number){
    if(Array.isArray(number)) {
        let Maxnum = Math.max(...number)
        let expectedSum = Maxnum * (Maxnum + 1)/2;
        let currentSum = number.reduce((a,b)=> a+b)
        // console.log(currentSum)
        console.log(expectedSum - currentSum)
    }
}  
missingNumber([1,2,4,5])

// function missingNumber(number){
//     for(let i=1; i<=number.length + 1; i++){
//         if(!number.includes(i)){
//             return i 
//         }
//     }
// }
// console.log(missingNumber([1,2,3,5]))