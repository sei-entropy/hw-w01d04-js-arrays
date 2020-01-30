//1 D
function summation(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}
//call by summation(5)
  
  //2
let numStr = [1, 2, 3, 4, 5];

function summationEven(numStr){
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(summationEven(numStr));
 
//3 
let arr1 = [8, 2, 2, 4]; 
function Avg(arr1){
var total = 0;
for(var i = 0; i < arr1.length; i++) {
    total += arr1[i];
var avg = total / arr1.length;
}
return avg }

//4 
function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverse('caterpillar');

//5 
const elements = ['test1', 'test2', 'test3'];
function addDashes(elements){
return elements1.join('-');
}
//6 *-*
function countUpAndDownevm()
{ 
var str = "";

 for (var i=1 ; i<=3 ; i++) {
str+=i;
}
for(var i=2 ; i>0 ; i--) {
  str+=i;

var arr = str.split('');
return arr;
}}



//7 D
var myList = ['cat', 'rabbit', 'dog', 'frog'];

var str = 'a';

function wordsWhithA(myList, str) {
  str = str.split('');
  return myList.filter(function(myList) {
    return str.every(function(char) {
      return myList.includes(char);
    });
  });
}

const result = wordsWhithA(myList, str); 
console.log(result);

//8 -----D
var mylist = ['cat', 'rabbit', 'dog', 'frog'];

var s = 'g';

function wordWithLetter(mylist, s) {
  str = s.split('');
  return mylist.filter(function(mylist) {
    return str.every(function(char) {
      return mylist.includes(char);
    });
  });
}

const theResult1 = wordWithLetter(mylist, s); 
console.log(theResult1);

//9
function longestWord(str) {
    const stringArray = str.split(" ");
    const longestWord = stringArray.reduce((a, b) => {
      if(b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return longestWord;
  }
  longestWord("The cat in the house");

//10 
function largestEvenNumber(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(largestEvenNumber([1,2,3,10,4,7,0]));