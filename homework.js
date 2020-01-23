
//Create a function that will get the sum of the 
//numbers between 1 and n and return the answer
var returnSum = function(num){
    var getNumbers = [];
    var result=0;
    for(var i =0; i<=num;i++){
        getNumbers.push(i);
        result +=getNumbers[i];
    }
    return result;
    
};

// sum all the even numbers
var sumEvenNums = function(num){
    var getEvenNums =[];
    var total = 0;
    for(var i =0; i<=num;i++){
        getEvenNums.push(i);
        if(i%2===0){
        total +=getEvenNums[i];
        }
    }
    return total;
};
//avg
var getAverage = function(){
    var numbers = [8,2,2,4];
    var sum = 0;
    for(var i =0; i<numbers.length;i++){
        sum +=numbers[i];
    }
    return sum /numbers.length ;
    
};
//### reverse
var reverseStr = function(letters){
    var str = [];
for(var i = 0; i < letters.length; i++){
    str.push(letters[i]);}
     str.reverse();
     var revese =str.join('');
    return revese;
}
reverseStr('caterpillar')
//## join functions
var joinFunc = function(){
    var addDashes = ['test1', 'test2', 'test3'];
    var dashes = addDashes.join('-');
    return dashes;
}
//##  Up down 
var upDown = function(){
    nums =[1,2,3];
    var stopAt=0;
    for(var i = 0; i<nums.length;i++){
        console.log(nums[i]);
         stopAt=i;                  
                             }
        if(stopAt ===nums.length-1){ 
    for(var i = nums.length-2; i>=0;i--){
        console.log(nums[i]);
                }
            }
        
    }
    upDown();

    //## find word with a
    const findWordsWith = function(){
    var str = ['cat', 'rabbit', 'dog', 'frog'];
     sl = str.length;
    for(var i = 0; i<sl; i++){
      if(str[i].includes('a')== true){
        console.log(str[i]);
        }
    }
}
    //## words with letter G
    const letterGWords = function(){
        var str = ['cat', 'rabbit', 'dog', 'frog'];
         sl = str.length;
        for(var i = 0; i<sl; i++){
          if(str[i].includes('g')== true){
            console.log(str[i]);
            }
        }
    }
    //### find longest word
    const longestWord = function(str) {
        var makeSplit = str.split(' ');
        var longestWord = 0;
          var word = '';
        for(var i = 0; i < makeSplit.length; i++){
          if(makeSplit[i].length > longestWord){
          longestWord = makeSplit[i].length;
          word = makeSplit[i];
           }
        }
        return word;
      }
      longestWord("The cat in the house");
    //## largest num
    const largestEvenNumber = function(){
        var largestNum =[1,2,3,4,5,6,7,8,9,10];
            var largest = 0;
            var result = 0;
            for(var i = 0; i < largestNum.length; i++){
                if(largestNum[i] > largest && largestNum[i]%2==0){
                    largest = largestNum[i];
                result = largestNum[i]; }
            }
        return result;
        }
