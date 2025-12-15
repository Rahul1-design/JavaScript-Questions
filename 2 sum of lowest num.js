// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

    function sumTwoSmallestNumber(number){
        //sorting in numeric order
    number.sort((a,b)=> a - b)

    //getting smallest value 
    const small1 = number[0];
    const small2 = number[1];

    return small1+small2;

    }

    console.log(sumTwoSmallestNumber([19, 5, 42, 2, 77])); 
    // 2 + 5 = 7 ✅

    console.log(sumTwoSmallestNumber([10, 343445353, 3453445, 3453545353453]));
    // 10 + 3453445 = 3453455 ✅


