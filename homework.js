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
    let avg = 0
    let Length = array.length;
    let total;
    for (let i = 0; i < length; i++) {
        total += array[i];
        avg = total / length;
        return avg;
    }
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

    for (let i = 0; i < n; i++) {
        Array[i] = i + 1;
    }
    for (let j = Array.length; i < n; i++)


        console.log(Array)


}

//Write a function that will tell you all of the words in an array that contain the letter `a` 
const wordsWithA = function(array) {
        for (let i = 0; i <= array.length; i++) {
            const myArray = [];
            if (array[i].includes('a'))
                myArray.push(array[i])

        }
        return myArray;




    }
    //Write a function that will tell you all of the words in an array that contain a specified letter 
const wordsWithLetter = function(letter, array) {

    let newArray = [];
    for (let i = 0; i <= array.length; i++) {
        if (array[i].includes(letter))
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