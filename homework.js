//Q1

const num = function(N) {
    let sum = 0;
      for(let i = 1; i <= N; i=i+1){
        sum= sum + i;
      }
      return sum;
  }


  //-----------------------
  // Q2

  const num =[1,2,3,4,5]
  let sum= 0;
  for (let i=0; i<num.length; i++){
    if(num[i]%2===0) {
    sum+=num[i];
    }
  }
  console.log(sum)


//-----------------------
  //Q3
   const numbers = function (num) {
    let sum= 0;
    for (let i=0; i<num.length; i++){
          sum+=num[i];
    }
  const avg= (sum/num.length);
  return avg;
    }
  numbers ([8,2,2,4]);


//-----------------------
//Q4


const reverseString= function(str){
 return str.split("").reverse().join("");
}
reverseString("caterpillar")

//-----------------------
//Q5

const addDashes= function (test){
  let dashWord= test.join("-");
  
  return dashWord;
  }
  addDashes(['test1', 'test2', 'test3']); 

//-----------------------


const findLongestWord= function(str) {
  let strSplit = str.split(' ');
  var longestWord = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}

//-----------------------
//Q6

const countUpAndDown= function(num) {

  let arr=[];
for (let i=1 ; i<=num; i++) {
 arr.push(i);
}

for (let j=num-1 ; j>0; j--) {
  arr.push(j);
   
  }
  return arr.join();
}
countUpAndDown(3);


//-----------------------
//Q7

const wordsWithA= function (arr) {
  const arrWithA= arr.filter(function(value) {
    return value.match("a");
  }
);
return arrWithA;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']); 



//-----------------------
//Q8

const findwordsWithLetter= function (arr) {
  const wordsWithLetter= arr.filter(function(value) {
    return value.match("g");
  }
  );
    return wordsWithLetter;
  }
  findwordsWithLetter(['cat', 'rabbit', 'dog', 'frog']);
  
  
  
 

//-----------------------
//Q9
const findLongestWord = function (str) {
  const  longestWord = str.split(' ');
  const sortedArray= longestWord.sort(function
    (strA, strB)
 {

      return strB.length - strA.length ;
    }
  );
   
  return sortedArray[0];
 }
 console.log(findLongestWord("The cat in the house"));


//-----------------------
//Q10
const findlargestEvenNumber = function (str) {
  
  const sortedArray= str.sort(function
    (strA, strB)
 {

      return strB - strA ;
    }
  );
   
  return sortedArray[0];
 }
 console.log(findlargestEvenNumber([1,2,3,10,4,7,0]));
