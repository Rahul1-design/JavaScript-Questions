// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    string = string.toLowerCase();
    let letter = new Set();

    for(let char of string){
        if(char >='a' && char<='z'){
            // console.log(`Successfully added ${char} word `)
            letter.add(char);
        }
        else{
            console.log(`${char} is not the letter`)
        }
    }

    return letter.size === 26;
}

console.log("Test 1:", isPangram("The quick brown fox jumps over the lazy dog."));

console.log("\nTest 2:", isPangram("Hello World!"));

console.log("\nTest 3:", isPangram("123 abc! @#"));

console.log("\nTest 4:", isPangram("abcdefghijklmnop"));



