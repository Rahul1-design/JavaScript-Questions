// Challenge 9: Custom FizzBuzz
// Write a function that takes parameters and makes FizzBuzz flexible:
// javascriptfunction customFizzBuzz(limit, num1, num2, word1, word2) {
//     // Your code here
// }

// customFizzBuzz(15, 3, 5, "Foo", "Bar");
// // Should work like FizzBuzz but with YOUR numbers and words
// // 1, 2, Foo, 4, Bar, Foo, 7, 8, Foo, Bar, 11, Foo, 13, 14, FooBar

// customFizzBuzz(10, 2, 4, "Even", "Double");
// // 1, Even, 3, EvenDouble, 5, Even, 7, EvenDouble, 9, Even

function customFizzBuzz(limit, num1, num2, word1, word2) {
    let arr = [];
    for(let i=1; i<=limit;i++){
        if(i%num1==0 && i%num2==0) {
            arr.push(`${word1}${word2}`)
        }
        else if(i%num1==0) {
            arr.push(`${word1}`)
        }
        else if(i%num2==0) {
            arr.push(`${word2}`)
        }
        else {
            arr.push(i)
        }
    }
    return arr;
}

console.log(customFizzBuzz(15,3,5,"Foo","Bar"))