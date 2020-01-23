const summation = function(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;

    console.log(i);
  }

  // console.log(15 'because' + 1+2+3+4+5 +  ' = ' + total);
  console.log(total);
};

/// 2

const summationEven = function(n) {
  let total = 0;
  let count = n;
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      total = total + i;

      console.log(i);
    }
  }
  console.log(total);
};

/// 3

const aveFunction = function(arry) {
  let total = 0;

  for (let i = 0; i < arry.length; i++) {
    total += arry[i]; //don't forget to add the base
  }

  let ave = total / arry.length;

  return ave;
};

/// 4

function reverseString(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}

reverseString("Ali");

////5

const addDashes = function(arr) {
  return arr.join("-");
};

///6

const countUpAndDown = function(str) {
  let countString = "";

  for (let i = 1; i < str; i++) {
    countString += String(i);
  }

  for (let i = str; i > 0; i--) {
    countString += String(i);
  }

  return countString;
};

/// 7

const wordsWithA = function(arr) {
  let result = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("a") !== -1) {
      result[j++] = arr[i];
    }
  }
  return result;
};

/////// 8

const wordsWithLetter = function(letter, array) {
  let result = [];
  let n = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(letter) !== -1) {
      result[n++] = array[i];
    }
  }
  return result;
};

wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]);

//// 9

const longestWord = function(str) {
  let array = str.split(" ");

  let largestWordLength = array[0].length;
  let largestWordIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > largestWordLength) {
      largestWordLength = array[i].length;

      largestWordIndex = i;
    }
  }
  return array[largestWordIndex];
};

longestWord("The cat in the house");

/// 10
const largestEvenNumber = function(array) {
  let even = [];

  let n = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) even[n++] = array[i];
  }
  let largestEven = even[0];
  for (let i = 0; i < even.length; i++) {
    if (largestEven < even[i]) largestEven = even[i];
  }
  return largestEven;
};

largestEvenNumber([1, 2, 3, 10, 4, 7, 0]);
