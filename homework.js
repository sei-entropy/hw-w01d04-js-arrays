//Create a function that will get the sum of the numbers between 1 and n and return the answer
const summation = function (n) {
    let sum=0;
    for (let i = 0; i <= n ; i++)
        sum += i;

    return sum;
};
summation(5);


//Create a program to get the sum of all the even numbers in a group
const summationEven = function (n) {

    let sum = 0;
  for (let i = 0; i <= n; i++){
    if (i % 2 ===0){
      sum += i;
    }
  }
  return sum;
};
summationEven(5);

//Create a function to get the average of a group of numbers
const avg = function (arr) {

    let sum = 0;
    let avrg = 0;
  for (let i = 0; i <= arr.length; i++)
      sum += 5;
  
  avrg = sum / arr.length;

  return sum;
};
avg([8, 2, 2, 4]);