// Challenge 4: Find the Longest Word
// Write a function that takes a sentence (string) and returns the longest word in it.
// javascriptfindLongestWord("The quick brown fox jumped over the lazy dog")
// // Should return: "jumped" (6 letters)
// Before coding, think about:

// How would you split a sentence into individual words?
// Once you have words, how would you track which one is longest as you loop through them?



function longestWord(string) {
    string = string.split(" ");
    console.log(string)
    let long = ""
    for(let word of string) {
        if(word.length > long.length){
            long = word
        }
    }
    return long
}

console.log(longestWord("My name is Rahul Shrestha"));