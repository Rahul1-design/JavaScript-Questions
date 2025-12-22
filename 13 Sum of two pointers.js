// Challenge 11: Sum of Two Numbers (Two Pointer Technique)
// This is a classic interview problem that teaches an important algorithm pattern:
// Given an array of numbers and a target sum, find TWO numbers that add up to the target. Return their indices.
// // Should return: [0, 1]  (because 2 + 7 = 9)

// findTwoSum([3, 2, 4], 6);
// // Should return: [1, 2]  (because 2 + 4 = 6)

function findTwoSum(array,totalNum) {
    if(Array.isArray(array)){
        for(let i=0;i<=array.length;i++) {
            for(let j=i+1;j<=array.length;j++) {
                if(array[i] + array[j] === totalNum) {
                    return [i,j];
                }
            }
        }
    }
    else {
        throw new Error("The given numer is not in array")
    }
}

console.log(findTwoSum([2, 11, 7, 15], 9));
