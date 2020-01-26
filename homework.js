//Q1

const summation = function(N) {
  let sum = 0;
    for(let i = 1; i <= N; i=i+1){
      sum= sum + i;
    }
    return sum;
}


//-----------------------
// Q2


const summationEven= function(num){ 
let sum= 0;
for (let i=0; i<num.length; i++){
  if(num[i]%2===0) {
  sum+=num[i];
  }
}
return (sum);
}
summationEven([1,2,3,4,5])


//-----------------------
//Q3
 const avg = function (num) {
  let sum= 0;
  for (let i=0; i<num.length; i++){
        sum+=num[i];
  }
const avgNumber= (sum/num.length);
return avgNumber;
  }
avg([8,2,2,4]);


//-----------------------
//Q4


const reverse = function(str){
return str.split("").reverse().join("");
}
reverse("caterpillar")


//-----------------------
//Q5

const addDashes= function (test){
let dashWord= test.join("-");

return dashWord;
}
addDashes(['test1', 'test2', 'test3']); 




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
return arr.join("");
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

const findwordsWithLetter= function (letter, arr) {
const wordsWithLetter= arr.filter(function(value) {
  return value.match(letter);
}
);
  return wordsWithLetter;
}
findwordsWithLetter('g',['cat', 'rabbit', 'dog', 'frog']);





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
  let largestEvenNumber = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i]%2===0 && (str[i]> largestEvenNumber)){
    
     largestEvenNumber= str[i]}
    }
return largestEvenNumber;
}
findlargestEvenNumber([1,2,3,10,4,7,0,15]);










// not a soultin just for a future use 
//how to use sort q10
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
