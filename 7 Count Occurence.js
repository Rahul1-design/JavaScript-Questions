// Challenge 5: Count Occurrences
// Write a function that counts how many times each word appears in a sentence.
// javascriptcountWords("hello world hello");
// // Should return: { hello: 2, world: 1 }

function countWords(words){
    words = words.split(" ");
    let count = {};
    for(let word of words){
        if(count[word]){
            count[word] = count[word] + 1;
        }
        else{
            count[word] = 1;
        }
    }
    return count;
}
console.log(countWords("Hello world Hello"))
