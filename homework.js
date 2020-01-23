// Summation 

const summation = function (n){ 
    let num=0;
    for (i=1; i<=n ;i++)
{
     num=num+i;

}
console.log(num)
};

//

const sumEven = function (n){ 
    let num=0;
    for (i=1; i<=n ;i++)
{
    if (i%2 === 0)
     num=num+i;

}
console.log(num)
};

//

const no=[]
no.push(8,2,2,4);
length= no.length-1 ;
let num=0;
for ( i=0 ; i<= length ; i++ )
{ 
    num=num+no[i];
}
console.log(num/no.length)





let reverse= function (str) {
// first split the litters of the word or string , then reverse , then joing the elements. 
let splitStr = str.split("");
let reArray = splitStr.reverse();
let joinArray = reArray.join("");
return joinArray;
}
reverse('elo');
reverse("hello");




const addDashes = function ()
{
   const testArray=['test1', 'test2', 'test3'];
    for ( let i=0 ; i<testArray.length ; i++)
    {
        console.log(testArray[i]+" - ");
    }
}

addDashes();


const Count = function (n)
{ 
    for ( let i=1 ; i<=n ; i++)
    { 
        console.log(i); 

    }; 
        n= n-1; 

    while ( n > 0)
    { 
        console.log(n);
        n--;
    }
}




/*
<li>Write a function that will tell you all of the words in an array that contain a specified letter
  <br>
    <code > wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog']) // should return ['dog', 'frog']</code>
  </li> 
  */



const wordsWithA = function ()
{
    const words=['cat', 'rabbit', 'dog', 'frog'];
    const filterForA = (A) => {
        return words.filter(words => words.indexOf(A) > -1);
    }
    console.log(filterForA('a')); 

}

wordsWithA();

const wordsWithLetter = function (L)
{
    const words=['cat', 'rabbit', 'dog', 'frog'];
    const filterFor = (L) => {
        return words.filter(words => words.indexOf(L) > -1);
    }
    console.log(filterFor(L)); 

}

wordsWithLetter('o');
wordsWithLetter('g');



/* 
Function that returns the longest word in sentence
  <br>
    <code>longestWord("The cat in the house") // should return "house"</code>
  </li>
  */

 const longestWord=function()
 {  
     const str=' The quick brown fox jumped over the lazy dog ';
     const  string = str.split(' '); // splitting words
     console.log(string);
     let Word=0; // init
     let found="";
     for ( let i=0 ; i<string.length; i++)
     { 
         if (string[i].length > Word)
         {

         Word=string[i].length; // for passing index value
         found = string[i]; // for passing the word 
         }
     };
    
     return found
 };

 longestWord()



 const longestNumber=function()
 {  
     const num=[1,2,3,10,4,7,0];
    let  N=0;
     let found = 0; 
     for ( let i=0 ; i<num.length; i++)
     {   if (num[i].length > N && num[i])
        { 
            N=num[i].length; // for passing index value
            found = num[i]; // for passing the word 

        };
        return found;

     }
 };

 longestNumber()