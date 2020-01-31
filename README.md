# Leap Year Warmup Exercise


Write a function that will take any given year and return whether it is a leap year or not.
Remember that a leap year is:

- Every year that is evenly divisible by 4
- Except if it is evenly divisible by 100...
- Unless it is also divisible by 400 

Test Data...  Make sure it is working!

- 1997 is not a leap year, it should return **false**
- 1996 is a leap year, it should return **true**
- 1900 is not a leap year, it should return **false**
- 2000 is a leap year, it should return **true**

How to structure it...
- We want a custom function called isLeapYear

Bonus!

- Ask the user what number they want to test
- Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE

let userChoice = prompt('please enter year, and press enter');
const isLeapYear = function (num = 0) {
    let isEvenlyDivisibleByFour = num % 4 === 0;
    let isEvenlyDivisibleByOneHundred = num % 100 === 0;
    let isEvenDivisibleDyFourHundred = num % 400 === 0;
    if (isEvenlyDivisibleByFour) {
        if (isEvenlyDivisibleByOneHundred) {
            // the year is a leap year if it is divisible by 400.
            if (isEvenDivisibleDyFourHundred)
                console.log(num + ' is a leap year, ' + true);
            else
                console.log(num + ' is not a leap year, ' + false);
        } else
            console.log(num + ' is a leap year, ' + true);
    } else
        console.log(num + ' is not a leap year, ' + false);
    return 0;
};
isLeapYear(userChoice);