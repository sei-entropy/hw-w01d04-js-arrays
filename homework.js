// Create a function summation()

function summation(num) {
    let result= " " ;
    let sum =0 ;
    
    for (let index = 1; index <= num; index++) {

        result += index + "+" ;
        sum +=  index ;

    }
    return console.log("The result is "+result+" = "+sum);
}


//  Create a function summationEven()

function summationEven(num) {
    let result= " " ;
    let sum =0 ;
    
    for (let index = 1; index <= num; index++) {

        if (index % 2 === 0) {
            result += index + "+" ;
        sum +=  index ;
        }
        

    }
    return console.log("The result is "+result+" = "+sum);
}



//  Create a function avg()

function avg(value) {

    let result= " " ;
    let sum =0 ;
    
    for (let index=0; index<value.length ; index++) {

            result += value[index] + "+" ;
            sum +=  value[index] ;
    }
    const role = Math.round(sum/value.length);
    return console.log("The result is "+result+" = "+role);
}

//  Create a function reverse()

function reverses(str) {
    let result = "";

        for (let i = str.length - 1; i >= 0; i--) 
        {  result += str[i]; }

        return result;
}

//  Create a function addDashes()
function addDashes(str) 
{
    return console.log( str.join("-") );
}


//  Create a function countUpAndDown

function countUpAndDown(num) {
    let result=''

    for (let i=1 ; i<num ; i++)
    { result +=i }
    for (let i=num ; i>0 ; i--)
     { result +=i }
    return result
}

//  Create a function wordsWithA

function wordsWithA(array) {
    let result='';

    for (let i=0 ; i<array.length ; i++)
    { 
        if ( array[i].includes("a") === true ) {
            result += " " + array[i];
        } 
     }
     return result;
    }


//  Create a function wordsWithLetter

function wordsWithLetter(letter , array) {
    let result='';

    for (let i=0 ; i<array.length ; i++)
    { 
        if ( array[i].includes(letter) === true ) {
            result += " " + array[i];
        } 
     }
     return result;
    }
    

//  Create a function longestWord    

function longestWord(str) {

    let strSplit = str.split(' ');
    let longest = 0 ;

    for(let i = 0; i < strSplit.length; i++)
    {
        if(strSplit[i].length > longest) 
        {  longest = strSplit[i].length ; 
            result = i ;
        }
    }
    return strSplit[result];
}


//  Create a function largestEvenNumber

function largestEvenNumber(array) {

    let largest = 0;
    let result = 0 ;

    for (let i=0 ; i<array.length ; i++)
 { 
    if ( array[i]%2 === 0 ) 
    {
        if(array[i] > largest) 
        {  
            largest = array[i] ; 
            result = i ;
        }
    } 

 }
    return array[result];
}


