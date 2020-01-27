
function summation(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
//summation(5);15

//2.....................................................
function summationEven(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (!(i % 2)) {
        sum += i;
      }
    }
    return sum;
  }
// summationEven(5)

//3.......................................
function avg(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return (result = result / arr.length);
  }
//[8, 2, 2, 4] = 4



//4....................................................
function reverse(word) {
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }

//reversWord('caterpillar');

//5..........................................

const addDashes  = function (arry){
    let word = "";

    for (let i = 0; i < arry.length; i=i+1) {
       word= arry.join('-');
    }
    return word;}
//test(['test1','test2','test3'])
//"test1-test2-test3"

}
//6.....................................
function countUpAndDown(num) {
    let count = "";
    for (let i = 1; i <= num; i++) {
      count += i + " ";
    }
    for (let i = num - 1; i > 0; i--) {
      count += i + " ";
    }
    return count;}
    //
//7.................................

function wordsWithA(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase();
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == "a") {
          newArr.push(arr[i]);
        }
      }
    }
    return newArr;
  }

//names1(['cat', 'rabbit', 'dog', 'frog'])
// ["cat", "rabbit"]
//8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


const wordsWithLetter = function (w,word){

    let w=[]; 
    
    for (let i = 0 ; i<word.length;i++)
    {
    if(word[i].indexOf(w) > -1){
    w.push(word[i]);
    }
    }return w; }
    //wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"])
// ["dog", "frog"]

//9..................................

function longestWord(word) {
    word = word.split(" ");
    let longest = word[0];
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > longest.length) {
        longest = word[i];
      }
    }
    return longest;
  }//longestWord("The cat in the house")

//10.......................

function largestEvenNumber(arr) {

    let num = 0;

    for (let i = 0; i < arr.length; i++) 
    {
      if (!(arr[i] % 2) && arr[i] > num)
       {
        num = arr[i];
      }
    }
    return num;
  }
  //num([1,2,3,10,4,7,0])
   