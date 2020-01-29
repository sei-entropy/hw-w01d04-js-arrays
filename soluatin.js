// solution of 1
const summation = function (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum+i;
    }

    return sum;
}

 summation(5)


// solution of 2

const summationEven= function(num)
  {
    let sum = 0;
    for(let i=num; i>1 ;i--)
    {   
      if(i%2===0)
         sum = sum+i };
       return sum;
    };

    summationEven(8)


// solution of 3

const avg = function (num) {
    let sum = 0;

    for (let i = 0; i <= num.length-1; i++) 
    {
        sum = sum+num[i];
    }

    return sum / num.length;
}

avg([8,2,2,4])


// solution of 4

const reverse = function (word) {
    let toReverseWord = "";

    for (let i = word.length -1; i >= 0; i=i-1) {
        toReverseWord =  toReverseWord + word [i];
    }

    return toReverseWord;
}

reverse("caterpillar")


// solution of 5

const addDashes = function (word) {
    let output = "";

    for (let i = 0; i <= word.length -1 ; i++) {
        output +=  word[i];
        if (i !== word.length - 1)
        output = output+ "-";
    }

    return output;
}

addDashes(['test 1', 'test 2', 'test3'])


// solution of 6

const countUpAndDown = function (num) {
   let upAndDown = "";

    for (let i = 1; i < num; i++) {
       upAndDown += i.toString() + " ";
    }
    for (let i = num; i >= 1; i--) {
        upAndDown += i.toString();
        if (i !== 1)
            upAndDown += " ";
    }

    return upAndDown ;
}

countUpAndDown(3);

// solution of 7

const wordsWithA = function (word) 
{
    let array = [];

    for (let i = 0; i < word.length; i++) 
    {
        for (let j = 0; j < word[i].length; j++)
        {
            if (word[i][j] === 'a')
            {
                array.push(word[i]);
            }
        }
    }

    return array;
}

wordsWithA(['cat', 'rabbit', 'dog', 'frog']) 


// soluation of 8
const wordsWithLetter = function (letter, word) 
{
    let array = [];

    for (let i = 0; i < word.length; i++) 
    {
        for (let j = 0; j < word[i].length; j++) 
        {
            if (word[i][j] === letter) {
                array.push(word[i]);
            }
        }
    }

    return array ;
}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])


// soluation of 9
const longestWord = function (sentence) 
{
  
    let longestWord = "";
   let word = sentence.split(" ");

    for (let i = 0; i < word.length; i++) 
    {
        if (word[i].length > longestWord.length) {
            longestWord = word[i];
        }
    }

    return longestWord;
}

longestWord("The cat in the house") 


//soluation of 10 
const largestEvenNumber = function(num) 
{
    let largestEven = 0;
    for(let i = 0; i < num.length; i++)
    {
        if(num[i] % 2 === 0){
            if(num[i] > largestEven)
            {
                largestEven = num[i]
            }           
        }
    }
    return largestEven;
}

largestEvenNumber([1,2,3,10,4,7,0])

