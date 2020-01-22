//Create a function that will get the sum of the numbers between 1 and n and return the answer 
const summation=function(num) {
for(let i=num;i>1;i--)
{ num=num+(i-1) };
   return num;
};
console.log(summation(5));
//Create a program to get the sum of all the even numbers in a group 
const summationEven= function(num){
    let sumOfEven=0;
    for(let i=num;i>1;i--)
    {   if(i%2===0)
         sumOfEven=sumOfEven+i };
       return sumOfEven;
    };
    console.log(summationEven(5));
//Create a function to get the average of a group of numbers 
const avg=function(array){
 let sumOfArray=0;
for(let i=0;i<array.length;i++){
    sumOfArray=sumOfArray+array[i];
}
console.log (sumOfArray/array.length);
}
avg([8, 2, 2, 4]);

