// 1
function summation(number) {
    let total = 0;
      for(let i = 1; i <= number; i++){
        total += i;
      }
      return total;
  }
summation(5)

// 2
    function summationEven(number){
      let sum = 0;
      for(let i = 1; i <= number; i++) {
       if(i % 2 === 0) {
       sum = sum + i;
    }
    }
     return sum;
    }
    summationEven(5)

// 3
    function avg(number){
        let sum = 0;
         for(let i in number) {
          sum += number[i];
        }
        let numbersCnt = number.length;
        return (sum / numbersCnt);
    }
     avg([8, 2, 2, 4])

// 4
    function reverse(str) {
        let splitString = str.split(""); 
     
        let reverseArray = splitString.reverse(); 
        let joinArray = reverseArray.join("");
            return joinArray; 
    }
    reverse("caterpillar")


// 5
    
    
const addDashes = function (testArray){
     var stringDashes = '';
     for (let i=0 ; i < testArray.length ; i++){
         
       stringDashes += testArray[i] + '-';
      }
    stringDashes = stringDashes.substring(0, stringDashes.length -1);
    return stringDashes;
  }
   
  addDashes(['test1', 'test2', 'test3'])

// 6
const countUpAndDown = function (n){
  count = '';
  for(let i = 1; i < n; i++) {
    count += i + ' ' ; 
}
for(let i = n; i >= 1; i--){
    count += i + ' ';
}
return count + ' '; 
};
countUpAndDown(3)


// 7
const wordsWithA = function(array){
   
  const words = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].indexOf('a') == true){
   words.push(array[i]);
  
    }
  }
    return words;
};
wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

// 8
function wordsWithLetter(letter , array) {
    
    const words = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i].indexOf(letter) !== -1){
       words.push(array[i]);
  
    }
  }
    return words;
};
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])

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
longestWord("The cat in the house")

// 10
function largestEvenNumber(array) {

  array.sort((num1, num2) => num2 - num1);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0)
      return array[i];
    }
  }
 largestEvenNumber([1,2,3,10,4,7,0])
