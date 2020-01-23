//1............hm
const numbers = [1 , 2 ,3 , 4 ,5] 
let summation = 0;

for (let i = 0; i < numbers.length; i=i+1) {
    
    summation = summation + numbers[i]
}
//2.....................................................

/*const numbers = [1 , 2 ,3 , 4 ,5]
let summation = 0;


for (let i = 0; i < numbers.length; i=i+1) {

    if (numbers[i]%2 ==0){
     summation = summation + numbers[i]


    }
    }
console.log(i)*/
//3.......................................
const numbers = [1 , 2 ,3 , 4 ,5] 
let summation = 0;

for (let i = 0; i < numbers.length; i=i+1) {
    
    summation = summation + numbers[i]
    summation/numbers.length};
}
//4....................................................

function reversWord(w) {

var newString = "";
for (var i = w.length - 1; i >= 0; i--) {
newString += w[i];
}
return newString;
}
reversWord('caterpillar');
//5..........................................
arry =['test1', 'test2','test3']
arry.join('-');
//6.....................................


//7.................................

let names1 =['cat', 'rabbit', 'dog', 'frog'];

let wordsWithA = (letters) => {

return names1.filter (i => i.indexOf(letters) > -1);
} 

console.log(wordsWithA('a'));


//8,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

let names =['cat', 'rabbit', 'dog', 'frog'];

let wordsWithLetter = (letters) => {

return names.filter(i => i.indexOf(letters) > -1);
} 

console.log(wordsWithLetter('g'));


//9..................................

//10.......................

let numbers=[1,2,3,10,4,7,0];

let largestEvenNumber = 0;

for (var i = 0; i <  numbers.length; i++) {

if (numbers[i] % 2 === 0 && numbers[i] > largestEvenNumber) {
console.log( largestEvenNumber = numbers[i])
}

}
