//Q1

onst  summation = function (n) {
  let output = 0;
  for( i = 1;  i <= n; i++) {
    output = output  + i;
  }
  return output ;
};

let n = 5 ;
console.log('Sum of numebers from 1 to '+ n +' is '+ summation(n));


//Q2

const summationEven = function (n){
  let sum = 0 ;
 
 for ( i=0; i <=n; i=i+2) {
   sum +=1
   }
 return sum ;
 
 };
  let n = 6
 console.log(summationEven(n));


 //Q3

 const avg=[8, 4, 2, 4];

const getAvg = function () {

for (i = 0 ; i< avg.length ;i++) 
{
 if (avg[i] === avg.length ){
   
 avg= avg[i] + avg[i]; 
 }
return avg[i] / avg.length ;
}
};

console.log(getAvg())

//Q4 

function reverseString(str) {
var splitString = str.split("")


var reverseArray = splitString.reverse(); 


var joinArray = reverseArray.join("");

return joinArray;
}

console.log(reverseString("caterpillar"));

//Q5

const addDashes =['test1', 'test2', 'test3'] ;
function combinesThemDash () { 
  let Dash ;
for (i=0 ; i <= addDashes.length ; i++){
if (addDashes[i] === addDashes.length)
Dash = addDashes.join("-")
}
return Dash  ;
};
console.log(combinesThemDash()); 

or 

const addDashes= function(Dasge){

return Dasge.join("-");

}

console.log(addDashes(['test1', 'test2', 'test3']));



//Q6

function printNumbers(args) {
  let input = args[0];
  for (var i = 1; i <= input; i++) {
    console.log(i);
    //return i;
  }
  for (var j = input-1; j <= input; j--) {
    console.log(j);
    if (j<=1){
      break;
    }
  }
}
console.log(printNumbers("3"));

//Q7

const LetterA = ['cat', 'rabbit', 'dog', 'frog']
const FindA = 'a';
function find(LetterA,FindA){
FindA = FindA.split('');
return LetterA.filter(function(LetterA){
return FindA.every(function(char){
return LetterA.includes(char);
});
});
}
const output = find(LetterA,FindA);
console.log(output);


//Q8

const wordsWithLetter = ['cat', 'rabbit', 'dog', 'frog']
const Findg = 'g';
function find(wordsWithLetter,Findg){
Findg = Findg.split('');
return wordsWithLetter.filter(function(wordsWithLetter){
return Findg.every(function(char){
return wordsWithLetter.includes(char);
});
});
}
const output = find(wordsWithLetter,Findg);
console.log(output);

//Q9

function longestWord(text) {
let wordArray = text.split(' ')
let maxLength = 0
let result = ''

for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
        maxLength = wordArray[i].length
        result = wordArray[i]
    }
}

return result
}
console.log(longestWord("The cat in the house"));

//Q10

var nums = [1,2,3,10,4,7,0];

function largestEven(arr) {
var evens = [];
for (var i = 0; i < arr.length; i++) {
  if(parseInt(arr[i]) % 2 === 0) {
    evens.push(arr[i]);
  }
}
var biggest = 0;
for (var j = 0; j < nums.length; j++) {
  if(nums[j] > biggest) {
    biggest = nums[j];
  }
}
return parseInt(biggest);
}

largestEven(nums)
console.log(largestEven(""));



// Extra 

var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['', '', '', ''];

function guessLetter(letter) {
  var goodGuess = false;
  var moreToGuess = false;
  for (var i = 0; i < wordLetters.length; i++) {
      if (wordLetters[i] == letter) {
          guessedLetters[i] = letter;
          goodGuess = true;
      }
      if (guessedLetters[i] == '_') {
          moreToGuess = true;
      }
  }
  if (goodGuess) {
      console.log('Yay, you found a letter!');
      console.log(guessedLetters.join(''));
      if (!moreToGuess) {
          console.log('YOU WON!');
      } 
 
guessLetter('T'); } else {
      console.log('Oh noes, thats not right!');
  }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');