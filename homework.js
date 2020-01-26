// 1
const summation = function (num) {
    let sum =0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 2
const summation = function (num) {
    let sum=0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }

    }
    return sum;
}

// 3
const avg = function (numberArray) {
    let total = 0;
    for (let i = 0; i < numberArray.length; i++) {
        total += numberArray[i];
    }
    return total / numberArray.length;
}

// 4
const reverse = function (word) {
    let lettersArray = word.split('');
    return lettersArray.reverse().join('');
}

// 5
const addDashes = function (wordsArray) {
    return wordsArray.join('-');
}

// 6
const countUpAndDown = function (num) { 
    let result = []
    for (let i = 1; i < num; i++) {
        result.push(i);
    }
    for (let i = num; i >= 1; i--) {
        result.push(i);
    }
    return result.join(" ");
}

// 7
const wordsWithA = function(wordsArray) {
    const solutionArray = []
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].indexOf('a') >= 0) {
            solutionArray.push(wordsArray[i])
        }
    }
    return solutionArray;
}

// 8
const wordsWithLetter= function(letter, wordsArray) {
    const solutionArray = []
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].indexOf(letter) >= 0) {
            solutionArray.push(wordsArray[i])
        }
    }
    return solutionArray;
}

// 9
const longestWord= function(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

// 10
const largestEvenNumber= function(numbersArray) {
    let largestEven = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        if ( (numbersArray[i] % 2 === 0) && (numbersArray[i] > largestEven) ) {
            largestEven = numbersArray[i];
        }
    }
    return largestEven;
}