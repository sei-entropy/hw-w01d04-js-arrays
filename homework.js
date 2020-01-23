
// Q1
const summation = function(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i;
    }

    return sum;
}

// Q2
const summationEven = function(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        (i % 2 === 0)? sum += i : sum+=0;
    }

    return sum;
}

// Q3
const avg = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum/nums.length;
}

// Q4
const reverse = function(str) {
    const arrOfLetter = [];
    for(let i = 0; i < str.length; i++){
        arrOfLetter[i] = str.charAt(i);
    }
    return arrOfLetter.reverse().join("");

}


// Q5
const addDashes = function(words) {
    return words.join('-');
}


// Q6
const countUpAndDown = function(num) {
    let climb = "";
    for(let i = 1; i <= num; i++){
        climb += i + ' ';

        if(i === num){
            for(let i = num - 1; i >= 1; i--){
                climb += i + ' ';
            }
        }
    }

    return climb.trim();
}



// Q7
const wordsWithA = function(arrOfWords) {
    arrOfA = [];
    for (let i = 0; i < arrOfWords.length; i++){
        if(arrOfWords[i].indexOf('a') !== -1){
            arrOfA.push(arrOfWords[i]);
        };
    };

    return arrOfA;
};



// Q8
const wordsWithLetter = function(letter, arrOfWords){
    arrOfLetter = [];
    for(let i = 0; i < arrOfWords.length; i++){
        if(arrOfWords[i].indexOf(letter) !== -1){
            arrOfLetter.push(arrOfWords[i]);
        }
    }

    return arrOfLetter;
}


// Q9
const longestWord = function(sentence) {
    const words = sentence.split(' ');
    longest = "";

    for(let i = 0; i < words.length; i++){
        for(let j = 1; j < words.length; j++){
            (words[i].length > words[j].length)? longest = words[i] : longest = words[j];
        };
    };

    return longest;
};


// Q10
const largestEvenNumber = function(nums) {
    let largestEven = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 === 0){
            if(nums[i] > largestEven){
                largestEven = nums[i]
            };           
        };
    };
    return largestEven;
};


// Extra 
const wordLetters = ['G', 'O', 'A', 'T'];
let rightGuessedLetters = ['_', '_', '_', '_'];
let guessedLetter = [];
let numOfWrongGuess = 0;

const guessLetter = function(letter) {
    let rightGuess = false;

    if(guessedLetter.indexOf(letter) === -1){
        guessedLetter.push(letter);

        for(let i = 0; i < wordLetters.length; i++){
            if (wordLetters[i] === letter){
                rightGuessedLetters[i] = letter;
                rightGuess = true;
            }
        };

        if(rightGuess === true){
            if(JSON.stringify(rightGuessedLetters) === JSON.stringify(wordLetters)) {
                console.log('You Win, ' + rightGuessedLetters.join(" "));
            }
            else {
                console.log('Correct, ' + rightGuessedLetters.join(" "));
            }
        }

        else {
            numOfWrongGuess++;

            if(numOfWrongGuess === 6){
                console.log('Sorry, You lost :(')
                console.log();
                console.log(' _________');
                console.log('|         |');
                console.log('|         0');
                console.log('|        /|\\');
                console.log('|        / \\');
                console.log('|');
                console.log('|');
            }
            else {
                console.log('Incorrect, ' + rightGuessedLetters.join(" "));
            }
        }
    }
    else {
        return;
    }
};