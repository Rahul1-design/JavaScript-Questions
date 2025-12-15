// Challenge 1: FizzBuzz (Classic Interview Problem)
// Write a function that prints numbers from 1 to 100, BUT:

// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz" instead
// For multiples of both 3 and 5, print "FizzBuzz"

// Example output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz...


function FizzBuzz() {
    let a = [];
    for(let i=1; i<=100; i++) {
        if(i%3==0 && i%5==0){
            a.push("FizzBuzz")
        }
        else if(i%3==0){
            a.push("Fizz")
        }
        else if(i%5==0){
            a.push("Buzz")
        }
        else {
            a.push(i)
        }
    }
    console.log(a)
}

FizzBuzz();