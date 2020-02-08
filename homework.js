//Create a function that will get the sum of the numbers between 1 and n and return the answer 
// should return 15 because 1+2+3+4+5=15

const summation = function(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

//Create a program to get the sum of all the even numbers in a group 

const summationEven = function(n) {
    let total = 0
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0)
            total += i
    }
    return total;
}


//Create a function to get the average of a group of numbers 

const avg = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];

    }
    return total / array.length;

}



//Create a function to reverse the letters in a word 

const reverse = function(string1) {

    let splitString = string1.split("");

    let reverseOne = splitString.reverse();

    let joinArray = reverseOne.join("");
    return joinArray;
}





//Create a function that takes an array of words and combines them with a dash 
const addDashes = function(array) {
    return array.join('-');
}

//Function that will count up to a number and back down and return a string of the climb 
const countUpAndDown = function(n) {
    const Array = [];

    newArray = [];
    concat = [];

    for (let i = 0; i < n; i++) {
        Array[i] = i + 1;
        newArray[i] = Array[i];
    }
    Array.reverse();
    Array.shift();
    concat = newArray.concat(Array)

    return concat;
}


//Write a function that will tell you all of the words in an array that contain the letter `a` 
const wordsWithA = function(array) {
        let myArray = [];
        for (let i = 0; i < array.length; i++) {

            if (array[i].includes('a') || (array[i].includes('A')))
                myArray.push(array[i]);

        }
        return myArray;


    }
    //Write a function that will tell you all of the words in an array that contain a specified letter 
const wordsWithLetter = function(letter, array) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(letter.toLowerCase()) || array[i].includes(letter.toUpperCase()))
            newArray.push(array[i])

    }
    return newArray;
}






//Function that returns the longest word in sentence 

// should return "house"

const longestWord = function(Sentences) {
    var str = Sentences.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}









//Function that returns the largest even number 



const largestEvenNumber = function(array) {


    array.sort((x, y) => y - x);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            return array[i];
    }
}