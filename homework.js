const summation = function (number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

const summationEven = function (number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

const avg = function (numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

const reverse = function (word) {
    let reverseWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    return reverseWord;
}

const addDashes = function (words) {
    result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i];
        if (i !== words.length - 1)
            result += "-";
    }

    return result;
}

const countUpAndDown = function (number) {
    result = "";

    for (let i = 1; i < number; i++) {
        result += i.toString() + " ";
    }
    for (let i = number; i >= 1; i--) {
        result += i.toString();
        if (i !== 1)
            result += " ";
    }

    return result;
}

const wordsWithA = function (words) {
    result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === 'a') {
                result.push(words[i]);
                break;
            }
        }
    }

    return result;
}

const wordsWithLetter = function (letter, words) {
    result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === letter) {
                result.push(words[i]);
                break;
            }
        }
    }

    return result;
}

const longestWord = function (sentence) {
    let words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const largestEvenNumber = function (numbers) {
    let evenNumbers = [];
    let max = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }

    for (let i = 0; i < evenNumbers.length; i++) {
        if (evenNumbers[i] > max) {
            max = evenNumbers[i];
        }
    }

    return max;
}

const wordLetters = ['G', 'O', 'A', 'T'];
const guessedLetters = ['_', '_', '_', '_'];

const guessLetter = function (letter) {
    for (let i = 0; i < wordLetters.length; i++) {
        if (letter === wordLetters[i]) {
            guessedLetters[i] = letter;

            if (guessedLetters.includes("_")) {
                return "Correct, " + guessedLetters.join(" ");
            }
            else {
                return "You Win, " + guessedLetters.join(" ");
            }
        }
    }

    return "Incorrect, " + guessedLetters.join(" ");
}


