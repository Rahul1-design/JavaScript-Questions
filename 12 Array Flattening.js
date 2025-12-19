// Challenge 10: Array Flattening
// Write a function that takes a nested array and flattens it into a single-level array.
// flattenArray([1, 2, [3, 4], 5]);
// // Should return: [1, 2, 3, 4, 5]

// 1 Method 
// function flattenArray(array) {
//     let result = [];
//     for(let item of array) {
//         if(Array.isArray(item)) {
//             result = result.concat(item)
//         }
//         else {
//             result.push(item);
//         }

//     }
//     console.log(result);
// }

// flattenArray([1, 2, [3, 4], 5]);
// flattenArray([1, [2, 3], [4, [5, 6]]])

// 2 Method 
// function javascriptflattenArray(array) {
//     let result = [];
//     for(let item of array) {
//         if(Array.isArray(item)) {
//             for(let innerItem of item) {
//                 result.push(innerItem);
//             }
//         }
//         else {
//             result.push(item)
//         }
//     }
//     console.log(result);
// }
// javascriptflattenArray([1, [2, 3], [4, [5, 6]]]);

// 3 Method 
//Using Recursion Function

function FlattenArray(array) {
    let result = [];
    for(let item of array) {
        if(Array.isArray(item)) {
            let flattened = FlattenArray(item)
            result = result.concat(flattened)
        }
        else {
            result.push(item)
        }
    }
    return result;
}
console.log(FlattenArray([1, [2, 3], [4, [5, 6]]]))