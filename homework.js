const summation = function(num) {
    let result = 0; 
    for(let i = 0; i <= num; i++) {
        result += i; 
    }
    return result; 
};

console.log(summation(5));

const summationEven = function(num) {
    let result = 0; 
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0)result += i; 
    }
    return result; 
};

console.log(summationEven(5));

const avg = function(arr) {
    let total = 0; 
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let average = total / arr.length; 
    return average;
};

console.log(avg([8, 2, 2, 4]));

const reverse = function(word) {
    let result = '';
    for(let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i);
    }
    return result;
};  

console.log(reverse('Ahmed'));

const addDahes = function(arr) {
    return arr.join('-');
};

console.log(addDahes(['test1', 'test2', 'test3']));

const countUpDown = function(num) {
    let count = '';
    for(let i = 1; i < num; i++) {
        count += String(i); 
    }
    for(let i = num; i > 0; i--){
        count += String(i);
    }
    return count; 
};

console.log(countUpDown(3));

const wordsWithA = function(arr) {
    let result = [];
    let j = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf('a') !== -1){
            result[j++] = arr[i];
        } 
    }
    return result;
}

console.log(wordsWithA(['cat', 'rabbit', 'dog', 'frog']));

const wordsWithLetter = function(letter, arr) {
    let result = [];
    let j = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(letter) !== -1){
            result[j++] = arr[i];
        } 
    }
    return result;
}; 

console.log(wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']));

const longestWord = function(str) {
    let arr = str.split(' ');
    let largestWordLength = arr[0].length;
    let largestWordIndex = 0; 
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].length > largestWordLength) {
            largestWordLength = arr[i].length; 
            largestWordIndex = i; 
        }
    }
    return arr[largestWordIndex];
};

console.log(longestWord("The cat in the house"));

const largestEvenNumber = function(arr) {
    let evenArr = []; 
    let j = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) evenArr[j++] = arr[i];
    }
    let largestEven = evenArr[0];
    for(let i = 0; i < evenArr.length; i++) {
        if(largestEven < evenArr[i]) largestEven = evenArr[i];
    }
    return largestEven;
};

console.log(largestEvenNumber([1,2,3,10,4,7,0]));

// Extra Practice: 

let wordLetters     = ['G', 'O', 'A', 'T'];
let guessedLetters  = ['_', '_', '_', '_'];
let tries = [];
let i = 0;
let points = 0;

const guessLetter = function(letter) {
    let nextIndex = guessedLetters.indexOf('_');
    if(wordLetters[nextIndex] === letter) {
        points--;
        guessedLetters[nextIndex] = letter; 
        console.log("Correct, " + guessedLetters.join(" "));
        console.log('Your points: ' + points);
    } else {
        points++; 
        if(tries[nextIndex] === undefined) tries[nextIndex] = [];
        if(tries[nextIndex].indexOf(letter) === -1){
            tries[nextIndex].push(letter);
            console.log("Incorrect, " + guessedLetters.join(" "));
            console.log('Your points: ' + points);
        }
    }
    if(points === 6) {
        console.log('You lost the game!');
        console.log('Try Again!');
        wordLetters     = ['G', 'O', 'A', 'T'];
        guessedLetters  = ['_', '_', '_', '_'];
        points = 0;
    }
}

guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('P'); // "Incorrect, G _ _ _"
guessLetter('R'); // "Incorrect, G _ _ _"
guessLetter('E'); // "Incorrect, G _ _ _"
guessLetter('W'); // "Incorrect, G _ _ _"
guessLetter('Q'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('T'); // "You Win, G O A T"