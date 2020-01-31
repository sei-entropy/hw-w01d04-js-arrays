//Q1

const  summation = function (n) {
  let output = 0;
  for( i = 1;  i <= n; i++) {
    output = output  + i;
  }
  return output ;
};

console.log('Sum of numebers from 1 to '+ 5 +' is '+ summation(5));


//Q2


const summationEven = function (num) {
  let sum=0;
for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
          sum += i;
      }
   }
  return console.log(sum);
}
summationEven(5);


 //Q3

 
const avg = function (array) {
let count =0;

for (i = 0 ; i < array.length ; i++) 
{

count  += array[i] 
 }
return  Math.floor(count / array.length)
}

console.log(avg ([8, 4, 2, 4]))

//Q4 

function reverse (str) {

const splitString = str.split("")


const reverse = splitString.reverse(); 


const joinArray = reverse.join("");

return joinArray;
}

console.log(reverse('caterpillar'))

//Q5

const addDashes= function(dash){
return dash.join("-");

}

console.log(addDashes(['test1', 'test2', 'test3']));



//Q6

const printNumbers = function (num) {
  const count = []
  for (i=1 ; i<=num ; i++){
   count.push(i)
  }
  for (j=num-1 ; j > 0 ; j--){
   count.push(j)
  
  }
return count.join(' ')
}

printNumbers(3)



//Q7

function find(LetterA){
  let FindA = 'a';
  FindA = FindA.split('');
return LetterA.filter(function(LetterA){
return FindA.every(function(char){
return LetterA.includes(char);
});
});
}

console.log(find(['cat', 'rabbit', 'dog', 'frog']));


//Q8


function find(wordsWithLetter,Findg){
  Findg = 'g';
  Findg = Findg.split('');
  return wordsWithLetter.filter(function(wordsWithLetter){
return Findg.every(function(char){
  return wordsWithLetter.includes(char);
});
  });
}
const output = find(['cat', 'rabbit', 'dog', 'frog']);
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

const largestEven = function (arr) {
  const evens = [];
  let biggest = evens;

  for (i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return Math.max(...biggest)
  }    
  console.log(largestEven([1,2,3,10,4,7,0]));


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
 
    } 
    else {
      console.log('Oh noes, thats not right!');
  }
}

guessLetter('G');
guessLetter('I');
guessLetter('O');
guessLetter('A');
