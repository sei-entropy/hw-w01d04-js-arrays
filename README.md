[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Array HW

Please create a branch called `homework`. Then, create a file named `homework.js` to save your solutions.

<ol>
  <li>Create a function that will get the sum of the numbers between 1 and n and return the answer
  var summation(=function(int n) 
{ 
   let result = 0; // initialize result 
    for (let x = 1; x <= n; x++) 
        result += sum1(x); 
        return result; 
} ;
int sum1(int x) 
{ 
    lat sum = 0; 
    while (x != 0) 
    { 
        sum += x %10; 
        x   = x /10; 
    } 
    return sum; 
} ;
  <br>
    <code>summation(5) // should return 15 because 1+2+3+4+5=15</code>
  </li>
  <li>Create a program to get the sum of all the even numbers in a group
  <br>
  function summationEven(n){
    let sum = 0;
  for(let i = 0; i <= n; i++) {
  if(i % 2 === 0) {
   sum = sum + i;}}
     return sum;
}
    <code > summationEven(5) // should return 6 because 2+4=6</code>
  </li>
    
  <li>Create a function to get the average 

  <br>
}
    <code> function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
    avg([8, 2, 2, 4]) // should return 4</code>
  </li>
  <li>Create a function to reverse the letters in a word
  <br>

    <code > 
    function reverseString(str) {
    var splitString = str.split(""); // var splitString = "caterpillar".split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; }reverse("caterpillar") // should return "rallipretac"
    </code>
  </li>
  <li>Create a function that takes an array of words and combines them with a dash
  <br>
    <code >const addDashes = ['test1', 'test2', 'test3'];

console.log(addDashess.join());

console.log(addDashes.join('"'));
 
    addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"</code>
  </li>
  <li>Function that will count up to a number and back down and return a string of the climb
  <br>
    <code>
 function countdown(i)    
{
    var ret = "";   
    while( i >= 0)
    {
        ret += i;
        if(i > 0) {
            ret += " "; 
        }
        i--;   
    }
    return ret;
}
var result = countdown(5);  
console.log(result);
    // countUpAndDown(3) // should return "1 2 3 2 1"</code>
  </li>
  <li>Write a function that will tell you all of the words in an array that contain the letter `a`
  <br>
    <code >
     const names = ['cat', 'rabbit', 'dog', 'frog'];
    const filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('a')) wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']</code>
  </li>
  <li>Write a function that will tell you all of the words in an array that contain a specified letter
  <br>
    <code > wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']</code>
  </li>
  <li>Function that returns the longest word in sentence
  <br>
    <code>function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	return console.log(longestWord);
     }
  }
  return longestWord;
}
findLongestWord("The cat in the house");</code>
  </li>
  <li>Function that returns the largest even number
  <br>
    <code>function largestEvenNumber(arr) {
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
</code>
  </li>
</ol>

## Extra Practice

Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

- Create two global arrays: one to hold the letters of the word (e.g. `['F', 'O', 'X']`), and one to hold the current guessed letters (e.g. it would start with `['_', '_', '_]'` and end with `['F', 'O', 'X']`)`.
- Write a function called guessLetter that will:
  - Take one argument, the guessed letter.
  - Iterate through the word letters and see if the guessed letter is in there.
  - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
  - When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  - It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
  - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

```js
// start of the game
const wordLetters     = ['G', 'O', 'A', 'T'];
const guessedLetters  = ['_', '_', '_', '_'];


// playing the game
guessLetter('G'); // "Correct, G _ _ _"
guessLetter('I'); // "Incorrect, G _ _ _"
guessLetter('O'); // "Correct, G O _ _"
guessLetter('A'); // "Correct, G O A _"
guessLetter('L'); // "Incorrect, G O A _"
guessLetter('T'); // "You Win, G O A T"
```
**How To: Make it like Hangman:**
- Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
- Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
- Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
