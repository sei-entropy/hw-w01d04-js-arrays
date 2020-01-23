//1-----------------
let sum = [1, 2, 3, 4, 5].reduce(add,0); 

function add(sum, a) {
    return sum + a;
}

console.log(sum);



//2------------------------------------------------------
let sum = [1, 2, 3, 4, 5];
let num1=0;
let num2=0;
let add=0;


for (let x=0 ; x<sum.length ; x++){



if ((sum[x]%2)==0){

 num1=sum[x];


}}

for (let x=0 ; x<sum.length ; x++){

if (num1 !== sum[x] && (sum[x]%2)==0){

 num2=sum[x];


}}

 function myFunc(sum) {
  return num1+num2;;
}


myFunc(sum);


//3-------------------------------------------------------------


const avg=[8,2,2,4]
function numAvg(num){
    var total = 0;
    for(var i = 0;i < num.length; i++) { 
        total+=num[i];
    }
    return total/num.length;
}
numAvg(avg);





//4=------------------------------------------------------------

let txt='caterpillar'

txt.split("").reverse().join("")




//5-----------------------------------------------------------


const addDashes=['test1' ,'teat2', 'test3']
console.log(addDashes.join("-" ));



//6 ----------------------------------------------------------

const countUpAndDown=[1,2,3];

for (let x=0 ; x<countUpAndDown.length ; x++){

console.log(countUpAndDown[x]);


}


function revers(countUpAndDown) {

countUpAndDown.pop();
countUpAndDown.reverse();
console.log(countUpAndDown);


}

revers(countUpAndDown);


//7---------------------------------------------------------------

const wordsWithA = ['cat', 'rabbit', 'dog', 'frog'];


for (let x=0 ; x<wordsWithA.length ; x++){
 
let result = wordsWithA.find(function(element) {
  return element >= 'a';
});

}
console.log(result);




//8-------------------------------------------------------------
const wordsWithLetter = ['cat', 'rabbit', 'dog', 'frog'];


for (let x=0 ; x<wordsWithLetter.length ; x++){
 
let result = wordsWithLetter.find(function(element) {
  return element >= 'g';
});

}
console.log(result);

//9----------------------------------------------------------------


function longestWord(str) {
    let abc = str.split(" ");
    let newStr = [];
    for (let i = 0; i < abc.length; i++) {
        
         newStr.push(abc[i].length);
    }
      let neweSTr= newStr.sort(function(x,y){return y -x;}); 	
    return neweSTr[0];
 }
 
 longestWord("The cat in the house");




 //10-------------------------------------------------------------


 let largestEvenNumber=[1,2,3,10,4,7,0];
let max = largestEvenNumber.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);
