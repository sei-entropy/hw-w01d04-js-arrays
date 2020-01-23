[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Array HW

Please create a branch called `homework`. Then, create a file named `homework.js` to save your solutions.

<ol>
  <li>Create a function that will get the sum of the numbers between 1 and n and return the answer
  <br>
    <code>
    const summation = function (n){ 
    let num=0;
    for (i=1; i<=n ;i++)
{
     num=num+i;

}
console.log(num)
};
</code>
  </li>
  <li>Create a program to get the sum of all the even numbers in a group
  <br>
    <code > const sumEven = function (n){ 
    let num=0;
    for (i=1; i<=n ;i++)
{
    if (i%2 === 0)
     num=num+i;

}
console.log(num)
};
</code>
  </li>
    
  <li>Create a function to get the average of a group of numbers 
  <br>
    <code> 
    const no=[]
no.push(8,2,2,4);
length= no.length-1 ;
let num=0;
for ( i=0 ; i<= length ; i++ )
{ 
    num=num+no[i];
}
console.log(num/no.length)
</code>
  </li>
  <li>Create a function to reverse the letters in a word
  <br>
    <code > let reverse= function (str) {
// first split the litters of the word or string , then reverse , then joing the elements. 
let splitStr = str.split("");
let reArray = splitStr.reverse();
let joinArray = reArray.join("");
return joinArray;
}
reverse('elo');
reverse("hello");
</code>

  </li>
  <li>Create a function that takes an array of words and combines them with a dash
  <br>
    <code > const addDashes = function ()
{
   const testArray=['test1', 'test2', 'test3'];
    for ( let i=0 ; i<testArray.length ; i++)
    {
        console.log(testArray[i]+" - ");
    }
}

addDashes();
</code>
  </li>
  <li>Function that will count up to a number and back down and return a string of the climb
  <br>
    <code> 
const Count = function (n)
{ 
    for ( let i=1 ; i<=n ; i++)
    { 
        console.log(i); 

    }; 
        n= n-1; 
        
    while ( n > 0)
    { 
        console.log(n);
        n--;
    }
}

</code>
  </li>
  <li>Write a function that will tell you all of the words in an array that contain the letter `a`
  <br>
    <code >  
const wordsWithA = function ()
{
    const words=['cat', 'rabbit', 'dog', 'frog'];
    const filterForA = (A) => {
        return words.filter(words => words.indexOf(A) > -1);
    }
    console.log(filterForA('a')); 

}

wordsWithA();
</code>
  </li>
  <li>Write a function that will tell you all of the words in an array that contain a specified letter
  <br>
    <code > const wordsWithLetter = function (L)
{
    const words=['cat', 'rabbit', 'dog', 'frog'];
    const filterFor = (L) => {
        return words.filter(words => words.indexOf(L) > -1);
    }
    console.log(filterFor(L)); 

}

wordsWithLetter('o');
wordsWithLetter('g');

</code>
  </li>
  <li>Function that returns the longest word in sentence
  <br>
    <code>const longestWord=function()
 {  
     const str=' The quick brown fox jumped over the lazy dog ';
     const  string = str.split(' '); // splitting words
     console.log(string);
     let Word=0; // init
     let found="";
     for ( let i=0 ; i<string.length; i++)
     { 
         if (string[i].length > Word)
         {

         Word=string[i].length; // for passing index value
         found = string[i]; // for passing the word 
         }
     };
    
     return found
 };

 longestWord()
 
 </code>
  </li>
  <li>Function that returns the largest even number
  <br>
    <code>largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"</code>
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
