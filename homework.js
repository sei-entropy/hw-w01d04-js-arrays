//summation off 5 function
const summation = function(sum){
    
    
    let i=0;
    while (i < 5 )
    {
    sum += i;
    i++;
    }
    return sum;
    
};


// summ Even number 
  const sumEvn = function (num){
    const sum = 0;

    for (const i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

//Create a function to get the average of a group of numbers



const average = function (num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    return sum / num.length;
}
// Create a function to reverse the letters in a word

const rev = function (word) {
    let revW = "";

    for (let i = word.length - 1; i >= 0; i--) {
        revW += word[i];
    }

    return revW;
}



//Create a function that takes an array of words and combines them with a dash

const  addDash = function (arry) {
   
    res = "";

    for (let i = 0; i < arry.length; i++) {
        res += arry[i];
        if (i !== arry.length - 1)
            res += "-";
    }

    return res;
}




//Function that will count up to a number and back down and return a string of the climb

const countUpAndDown = function (num) {
    res = "";

    for (let i = 1; i < num; i++) {
        res += i.toString() + " ";
    }
    for (let i = num; i >= 1; i--) {
        res += i.toString();
        if (i !== 1)
            res += " ";
    }

    return res;
}



//Write a function that will tell you all of the words in an array that contain the letter `a`

const wordsWithA = function (word) {
    res = [];

    for (let i = 0; i < word.length; i++) {
        for (let o = 0; o < word[i].length; o++) {
            if (word[i][o] === 'a') {
                res.push(word[i]);
            }
        }
    }

    return res;
}




//Write a function that will tell you all of the words in an array that contain a specified letter

const wordsWithLetter = function (letter, word) {
    res = [];

    for (let i = 0; i < word.length; i++) {
        for (let o = 0; o < word[i].length; o++) {
            if (word[i][o] === letter) {
                res.push(word[i]);
            }
        }
    }

    return res;
}




//Function that returns the longest word in sentence


const longestWord = function (sentence) {
    let word = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longestWord.length) {
            longestWord = word[i];
        }
    }

    return longestWord;
}



//Function that returns the largest even number


const largestEvenNumber = function(num){

    let evnum = [];

     for(let i = 0; i < num.length ; i++){
         if(num[i] %2 === 0){
          evnum.push(num[i])

         } 
     }
      return  console.log(Math.max(...evnum))  

}