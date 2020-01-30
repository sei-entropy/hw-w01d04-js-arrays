// 1
function numberSum(n) {
    let total = 0;
      for(let i = 1; i <= n; i++){
        total += i;
      }
      return total;
  }

// 2
    function numberEven(n){
      let sum = 0;
      for(let i = 1; i< n; i++) {
       if(i % 2 === 0) {
       sum = sum + i;
    }
    }
     return sum;
    }

// 3
    function numberAvg(n){
        var sum = 0;
         for(var i in n) {
          sum += n[i];
        }
        var numbersCnt = n.length;
        return (sum / numbersCnt);
    }

// 4
    function reverseString(str) {
        let splitString = str.split(""); 
     
        let reverseArray = splitString.reverse(); 
        let joinArray = reverseArray.join("");
            return joinArray; 
    }

// 5
    function combines('test1', 'test2', 'test3']) {
        
        for(let i = 1; i <= addDashes; i++){
          addDashes.join("-");
          }
          return addDashes;
      }

      const addDashes = function ()

      {
   const testArray=['test1', 'test2', 'test3'];
    for ( let i=0 ; i < testArray.length ; i++)
    {
        console.log(testArray.join("-"));
    }
}

// 6
const countUpAndDown = function (n){
  count = '';
  for(let i = 1; i < n; i++) {
    count += i; 
}
for(let i = n; i >= 1; i--){
    count += i;
}
return count; 
};

// 7

const wordsWithA = function(array){
  for(let i = 0; i < array.length; i++) {
    if(array[i].indexOf('a') == true){
  console.log(array[i]);
  
    }
  }
};

// 8

function wordsWithLetter(letter , array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i].indexOf(letter) !== -1){
  console.log(array[i]);
  
    }
  }
};

// 9
function longestWord(str) {

  let strSplit = str.split(' ');
  let longestWord = 0;

 for(let i = 0; i < strSplit.length; i++){

   if(strSplit[i].length > longestWord){ 
     longestWord = strSplit[i].length;
      count =i ;
   }
 }
 return strSplit[count]; 
}

// 10

function largestEvenNumber(arra) {

  arra.sort((num1, num2) => num2 - num1);

  for (let i = 0; i < arra.length; i++) {
    if (arra[i] % 2 == 0)
      return arra[i];
    }
  }