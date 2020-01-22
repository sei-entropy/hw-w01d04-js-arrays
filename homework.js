//Q1 ->work
const summation = function (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
summation(5);
console.log("------");
//Q2 ->work
const summationEven = function (number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}
summationEven(5);
console.log("------");
//Q3 ->work
const avg1 = [8, 2, 2, 4];
const avg = function (arr) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(avg = sum / arr.length);
}
avg(avg1);
console.log("------");
//Q4 ->ok but !! 
const reverse1 = function (wordReverse) {
    console.log(wordReverse.split("").reverse().join("").split(" ").reverse().join(" "));
}
reverse1("General assembly");
console.log("------");
//Q5 -> work
const myArra = ["software", "engineering", "immersive", "program"];
const addDashes = function (word){
    console.log("'"+word.join(" '-' ")+"'");
}
addDashes(myArra);

console.log("------");
//Q6 -> work
const countUpAndDown = function(myNum){
    let addNum = [];
  for(let i = 1 ;i< myNum ; i ++){
      addNum.push(i);
  }
    addNum.push(myNum);
  for(let i = myNum -1; i > 0 ; i --){
      addNum.push(i);
  }
 console.log(addNum.join());
}
countUpAndDown(3);
console.log("------");
//Q7 ->work
const wordsWithLetterA= function ( arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('a')) {
            console.log("wordsWithLetterA : "+arr[i]);
        }
    }
}
wordsWithLetterA(myArra);
console.log("------");
//Q8 ->work

const wordsWithLetter =function (letter,arr){
 for (let i = 0;i<arr.length ; i ++){
     if(arr[i].includes(letter)){
         console.log("wordsWithLetter "+letter+": "+arr[i]);
     }
 }
}
wordsWithLetter('m',myArra);
console.log("------");
//Q9 ->work
const longestWord = function(word){
    let split = word.split(" ");
    let logest = 0;
    let myWord = " ";
    for (let i = 0 ; i< split.length ; i ++){
if (logest < split[i].length){
    logest = split[i].length;
    myWord = split[i];
}
    }
    console.log("the Logest word is " + myWord);
}
longestWord("General assembly- software engineering immersive program ")
console.log("------");
//Q10 -> work
let myArr = [2,4,7,8,10,4,200];
const largestEvenNumber = function (arr){
    console.log(arr.sort((a, b) => a - b));
    let myNumber = 0;
    for (let i = 0 ; i< arr.length ; i++){
        if (arr[i] % 2 === 0){
            myNumber= arr[i];
        }
      
    }
    console.log(myNumber);
}
largestEvenNumber(myArr);
console.log("----");
// const wordLetters = ['G', 'O', 'A', 'T'];
// const guessLetter = function (guesslett){
//     let arr = wordLetters.length;
//     console.log(arr);
//    for (let i = 0 ; i < wordLetters ; i++){
//        if (wordLetters[i] == guessLett){
//            guessLetter[i]=guesslett;
//        }
//    }
// }
// guessLetter("e");