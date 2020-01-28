Please create a branch called homework. Then, create a file named homework.js to save your solutions.

Create a function that will get the sum of the numbers between 1 and n and return the answer
summation(5) // should return 15 because 1+2+3+4+5=15
Create a program to get the sum of all the even numbers in a group
summationEven(5) // should return 6 because 2+4=6
Create a function to get the average of a group of numbers
avg([8, 2, 2, 4]) // should return 4
Create a function to reverse the letters in a word
reverse("caterpillar") // should return "rallipretac"
Create a function that takes an array of words and combines them with a dash
addDashes(['test1', 'test2', 'test3']) // should return "test1-test2-test3"
Function that will count up to a number and back down and return a string of the climb
countUpAndDown(3) // should return "1 2 3 2 1"
Write a function that will tell you all of the words in an array that contain the letter `a`
wordsWithA(['cat', 'rabbit', 'dog', 'frog']) // should return ['cat', 'rabbit']
Write a function that will tell you all of the words in an array that contain a specified letter
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']
Function that returns the longest word in sentence
longestWord("The cat in the house") // should return "house"
Function that returns the largest even number
largestEvenNumber([1,2,3,10,4,7,0]) // should return "10"
Extra Practice
Create word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. ['F', 'O', 'X']), and one to hold the current guessed letters (e.g. it would start with ['_', '_', '_]' and end with ['F', 'O', 'X'])`.
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
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
How To: Make it like Hangman:

Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
© 2020 GitHub, Inc.