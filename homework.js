//1 
let arr = [1, 2, 3, 4, 5];
function sum(arr) {
    var s = 0;
    for (i = 0; i < arr.length; i++) {
       s += arr[i];
    }
    return s
  }
  
  //2
let numStr = [1, 2, 3, 4, 5];

function sumEvens(numStr){
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumEvens(numStr));
 
//3 
let arr1 = [8, 2, 2, 4]; 
function theAverage1(arr1){
var total = 0;
for(var i = 0; i < arr1.length; i++) {
    total += arr1[i];
var avg = total / arr1.length;
}
return avg }

//4 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('caterpillar');

//5
const elements1 = ['test1', 'test2', 'test3'];
function addDashes(elements1){
console.log(elements1.join('-'));
}
//6
function countUpAndDown(i)

{ 
for(var i=3 ; i>0 ; i--) {
  console.log(i);
    }
}
//7
var words5 = ['cat', 'rabbit', 'dog', 'frog'];

var str = 'a';

function find(words5, str) {
  str = str.split('');
  return words5.filter(function(word5) {
    return str.every(function(char) {
      return word5.includes(char);
    });
  });
}

const output5 = find(words5, str); 
console.log(output5);

//8
var words75 = ['cat', 'rabbit', 'dog', 'frog'];

var str7 = 'g';

function find(words75, str7) {
  str = str7.split('');
  return words75.filter(function(word75) {
    return str.every(function(char) {
      return word75.includes(char);
    });
  });
}

const output59 = find(words75, str7); 
console.log(output59);

//9
function longestWordf(str) {
    const stringArray = str.split(" ");
    const longestWord1 = stringArray.reduce((a, b) => {
      if(b.length > a.length) {
        return b;
      } else {
        return a;
      }
    });
    return longestWord1;
  }
  longestWordf("The cat in the house");

//10 
function largestEvenNumber(arra) {

    arra.sort((x, y) => y - x);
  
    for (var i = 0; i < arra.length; i++) {
      if (arra[i] % 2 == 0)
        return arra[i];
      }
    }
  
  console.log(largestEvenNumber([1,2,3,10,4,7,0]));