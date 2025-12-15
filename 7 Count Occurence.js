// Challenge 5: Count Occurrences
// Write a function that counts how many times each word appears in a sentence.
// javascriptcountWords("hello world hello");
// // Should return: { hello: 2, world: 1 }

// function CountWords(string) {
//     string = string.split(" ");
//     let count = 0
//     return newArr = string.filter((item, curr)=> {
//         if(item == curr){
//             count++
//             console.log(`${item}: ${count}`)
//         } 
//     }
//     )
// }
// console.log(CountWords("hello world hello"))

let words = ["hello", "world", "hello"];
words.filter((item, curr) => {
    console.log("item:", item, "curr:", curr);
});

