//1-Create a function that will get the sum of the numbers between 1 and n and return the answer 
const summation=function(num) {
for(let i=num;i>1;i--)
{ num=num+(i-1) };
   return num;
};
console.log(summation(5));
//2-Create a program to get the sum of all the even numbers in a group 
const summationEven= function(num){
    let sumOfEven=0;
    for(let i=num;i>1;i--)
    {   if(i%2===0)
         sumOfEven=sumOfEven+i };
       return sumOfEven;
    };
    console.log(summationEven(5));
//3-Create a function to get the average of a group of numbers 
const avg=function(array){
 let sumOfArray=0;
for(let i=0;i<array.length;i++){
    sumOfArray=sumOfArray+array[i];
}
console.log (sumOfArray/array.length);
}
avg([8, 2, 2, 4]);
//4-Create a function to reverse the letters in a word 
const reverse=function(string){
   let stringSplit= string.split("");
   let stringreverse=stringSplit.reverse();
   let result= stringreverse.join("");

   return result;
}
reverse("caterpillar");
//5- Create a function that takes an array of words and combines them with a dash 
const addDashes =function(array){
    let result= array.join("-");

   return result;
}

addDashes(['test1', 'test2', 'test3']);
//6-Function that will count up to a number and back down and return a string of the climb 
const countUpAndDown=function(nums){
 let array=[];
 for(i=0 ;i<nums;i++){
     const addednum =i+1;
     array.push(addednum);
 }
 for(i=nums ;i>1;i--){
    const addednum =i-1;
    array.push(addednum);
}
 return array.join(" ");  
}
countUpAndDown(3);
//7-Write a function that will tell you all of the words in an array that contain the letter `a` 
const wordsWithA=function(array){
let result=[];
for(i=0;i<array.length;i++){
    if(array[i].includes('a'))
    result.push(array[i]);
}
return result;
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog']);
//8-Write a function that will tell you all of the words in an array that contain a specified letter 
const wordsWithLetter= function(char,array){
    let result=[];
for(i=0;i<array.length;i++){
    if(array[i].includes(char))
    result.push(array[i]);
}
return result;
}

wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);
//9-Function that returns the longest word in sentence 
const longestWord=function(string){
    let stringSplit= string.split(" ");
    let longstr=stringSplit[0];
    for(i=1;i<stringSplit.length;i++){
      if(longstr.length<stringSplit[i].length)
      {longstr=stringSplit[i];}
    }
    return longstr;
}
longestWord("The cat in the house");
//10-Function that returns the largest even number 
const largestEvenNumber=function(array){
    let largestnum=0;
    for(i=0;i<array.length;i++){
      if(largestnum<array[i] && array[i]%2===0)
      {largestnum=array[i];}
    }
    return largestnum;
}
largestEvenNumber([1,2,3,10,4,7,0]);



