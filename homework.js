
const summation = function(n)

{
let sum = 0;

for (let i = 1; i <= n; i=i+1) {

    sum += i;//1  //3 //6 //
}
    return sum;

}
//summation(5);15

//2.....................................................
const summationEven = function (n)
{
    let summation = 0;

    for (let i = 0; i < n ; i=i+1) {

        if ( i %2 ===0){

         summation += i;

} return summation;
}
// summationEven(5)
//6
//3.......................................
const avg = function (arry){
    let summation = 0;
    for (let i = 0; i < arry.length; i=i+1) {

        summation = summation + arry[i];
       summation= summation/arry.length;
} return summation;
}
//[8, 2, 2, 4] = 4



//4....................................................

function reversWord(w) {

var newString = "";
for (let i = w.length - 1; i >= 0; i--) {
newString += w[i];
}
return newString;
}

reversWord('caterpillar');

//5..........................................

const test  = function (arry){
    let n = "";

    for (let i = 0; i < arry.length; i=i+1) {
       n= arry.join('-');
    }
    return n;}
//test(['test1','test2','test3'])
//"test1-test2-test3"

}
//6.....................................


//7.................................

const names1 = function (word){

    let w=[]; 
    
    for (let i = 0 ; i<word.length;i++)
    {
    if(word[i].indexOf('a') > -1){
    w.push(word[i]);
    }
    }console.log(w);
        
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
    }console.log(w);
        
    }


//9..................................

//10.......................

const num = function(arry){

    let largestEvenNumber = 0;
   
    for (let i = 0; i <  num.length; i++) {
   
       if (num[i] % 2 === 0 )
   {
   if(num[i] > largestEvenNumber){
       largestEvenNumber = num[i] }
      
    }
    return largestEvenNumber;
   
   }};//num([1,2,3,10,4,7,0])
   //0