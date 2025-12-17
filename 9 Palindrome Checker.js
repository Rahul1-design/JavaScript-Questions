// Challenge 7: Palindrome Checker
// Now let's use what you just learned! Write a function that checks if a word is a palindrome (reads the same forwards and backwards).
// javascriptisPalindrome("racecar");  // true
// isPalindrome("hello");    // false
// isPalindrome("madam");    // true


function palindromeChecker(string){
    string = string.toString();
    let reverseString = string.split('').reverse().join('')
    if(string === reverseString){
        return true
    }
    else{
        return false
    }
}
console.log(palindromeChecker("Rahul"))
console.log(palindromeChecker("madam"))
console.log(palindromeChecker(12321))
