//Create a function that will get the sum of the numbers between 1 and n and return the answer
const summation = function (n) {
    let sum=0;
    for (let i = 0; i <= n ; i++)
        sum += i;

    return sum;
};
summation(5);


//Create a program to get the sum of all the even numbers in a group
const summationEven = function (n) {

    let sum = 0;
  for (let i = 0; i <= n; i++){
    if (i % 2 ===0){
      sum += i;
    }
  }
  return sum;
};
summationEven(5);

//Create a function to get the average of a group of numbers
const avg = function (arr) {

    let sum = 0;
    let avrg = 0;
  for (let i = 0; i <= arr.length - 1; i++)
      sum += arr[i];
  
  avrg = sum / arr.length;

  return avrg;
};
avg([8, 2, 2, 4]);

//Create a function to reverse the letters in a word
const reverse = function (str) {
    let sum=0;
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--)
        newString += str[i];

    return newString;
};
reverse("caterpillar");


//Create a function that takes an array of words and combines them with a dash
const addDashes = function (arr) {
    return console.log(arr.join('-'));

};
addDashes(['test1', 'test2', 'test3']);

//Function that will count up to a number and back down and return a string of the climb
const countUpAndDown = function (n) {
    str = '';
    for (let i = 1; i <= n ; i++)
        str += i + ' ';

    for (let j = n; j >= 1 ; j--)
        str += j + ' ';

    return str;

};
countUpAndDown(3);

//Write a function that will tell you all of the words in an array that contain the letter `a`
const wordsWithA = function (arr) {
    let newArr = [];

    for (let i = 0; i < arr.length ; i++)
    {
        if (arr[i].includes('a'))
            newArr.push(arr[i]);
    }

    return newArr;

};
wordsWithA(['cat', 'rabbit', 'dog', 'frog']);


//Write a function that will tell you all of the words in an array that contain a specified letter
const wordsWithLetter = function (char, arr) {
    let newArr = [];

    for (let i = 0; i < arr.length ; i++)
    {
        if (arr[i].includes(char))
            newArr.push(arr[i]);
    }

    return newArr;

};
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);


//Function that returns the longest word in sentence
const longestWord = function (str) {
    let newStr
//.....
    return newStr;

};
longestWord("The cat in the house");


//Function that returns the largest even number
const largestEvenNumber = function (arr) {
    let num;
    let testArr = [];
    let j = 0;
    for (let i = 0; i <= arr.length-1; i++){
        if (arr[i] % 2 ===0){
          testArr.push(arr[i]);
          j++;
        }
      }
      num = Math.max(testArr);
          return num;

};
largestEvenNumber([1,2,3,10,4,7,0]);