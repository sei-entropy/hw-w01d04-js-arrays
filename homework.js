
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
    for(var i = 0; i<nums.length;i++){
        for (var j = 2; j >= 0; j++){
            console.log(nums[i]);
        } 
    }
}