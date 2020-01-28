//1-----------------
const sum = function (num){
  let result=0;
    for (let y =0 ; y<=num ; y++){
    
    result=num+y;
    result+=y
   
    }
   console.log(result);
    }
  sum(5)
  


//2------------------------------------------------------


const summationEven = function(num){

  let sum=0

  for(let i= 1 ; i<=num; i++){

      if(i % 2===0){

sum +=i;
      }}
  return sum;
}

summationEven(5)




//3-------------------------------------------------------------


function Avg(num){
  var total = 0;
  for(let i = 0;i < num.length; i++) { 
      total+=num[i];
  }
  return total/num.length;
}
Avg([8,2,2,4]);





//4=------------------------------------------------------------

let result = null;

const reverse = function(txt){

result = txt.split("").reverse().join("");
return result;

}

reverse("caterpillar")


//5-----------------------------------------------------------


const addDashes = function(array){

  return array.join("-");  
      }

      addDashes(['test1', 'test2', 'test3'])


//6 ----------------------------------------------------------



const countUpAndDown = function(num){

  for(let i = 1; i<=num;i++){

      console.log(i);

  }

  for(let x = num-1 ; x > 0 ; x--){


      console.log(x);
  } }

countUpAndDown(3);


//7---------------------------------------------------------------

function wordsWithA(words) {
  const word = [];

  words.forEach(function(elem, index) {


   if (elem.includes("a")) {
      word.push(elem);
    }
  });
  console.log(word);
}

wordsWithA(["cat", "rabbit", "dog", "frog"]);

//8-------------------------------------------------------------



function wordsWithLetter(letter, words) {
  const word = [];

  words.forEach(function(elem, index) {
    if (elem.includes(letter)) {
      word.push(elem);
    }
  });
  console.log(word);
}

wordsWithLetter("g", ["cat", "rabbit", "dog", "frog"]);

//9----------------------------------------------------------------


function longestWord(string) {


  let arr  = string.split(" ");
  

let  word = '';

 for (let i = 0; i < arr.length; i++)
{

  let  x = 0;

 
      if (i < arr[i].length) {
          x += arr[i].length;
          word = arr[i];
      }
  }
  return word;
}
 
 longestWord("The cat in house the");




 //10-------------------------------------------------------------


 function largestEvenNumber(array) {

  let l = 0;

  for (let i = 0; i < array.length; i++) {

    const x = array[i];
    if (x % 2 === 0) {

      if (x > l) {
        l = x;
    }
    }}

  console.log(l);
 }
 largestEvenNumber([1,2,3,10,4,7,0])
