
//Create a function that will get the sum of the 
//numbers between 1 and n and return the answer
var summation = function(num){
    var getNumbers = [];
    var result=0;
    for(var i =0; i<=num;i++){
        getNumbers.push(i);
        result +=getNumbers[i];
    }
    return result;
    
};

// sum all the even numbers
var summationEven = function(num){
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
var avg = function(numbers){
    var sum = 0;
    for(var i =0; i<numbers.length;i++){
        sum +=numbers[i];
    }
    return sum /numbers.length ;
    
};

//avg([8,2,2,4]);
//### reverse
var reverse = function(letters){
    var str = [];
for(var i = 0; i < letters.length; i++){
    str.push(letters[i]);}
     str.reverse();
     var revese =str.join('');
    return revese;
}
reverse('caterpillar')
//## join functions

var addDashes = function(addDashes){
    var dashes = addDashes.join('-');
    return dashes;
}
addDashes(['test1', 'test2', 'test3'])
//##  Up down 

const countUpAndDown = function(num){
    let countStr = '';
    
    for(let i =1; i<=num;i++){
        countStr+=i+' ' ;
    }
    for(let i =num-1; i>0;i--){
        countStr+=i+' ' ;
    }
    
    return countStr

}
countUpAndDown(4);



   //## words with letter G
    const wordsWithLetter = function(letter, argument){
     lengthOfArg = argument.length;
      const result = [];
    for(var i = 0; i<lengthOfArg; i++){
      if(argument[i].includes(letter)== true){
        result.push(argument[i]);
        }  
    }
    return result;
}
//wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']);
// words with letter a

    const wordsWithA = function(str){
         strLength = str.length-1;
         const result = [];
        for(var i = 0; i<strLength; i++){
          if(str[i].includes('a')== true){
            result.push(str[i]);
            }
        }
        return result;
    }
    //wordsWithA(['cat', 'rabbit', 'dog', 'frog']);
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
     // longestWord("The cat in the house");
    //## largest num
    const largestEvenNumber = function(largestNum){
            var largest = 0;
            var result = 0;
            for(var i = 0; i < largestNum.length; i++){
                if(largestNum[i] > largest && largestNum[i]%2==0){
                    largest = largestNum[i];
                result = largestNum[i]; }
            }
        return ''+result;
        }
    //largestEvenNumber([1,2,3,10,4,7,0]);