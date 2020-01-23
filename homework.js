// 1 
const summation=function(num){
    let result=[];
    let x=0;
    for(let i =1;i<=num;i++){
        result.push(i);  
    } 
      for(let i=0;i<result.length;i++){
           x=x+result[i]; 
      }
console.log(x);
};


//2 
const summationEven=function(num){
    let result=[];
    let x=0;
    let y;
    for(let i =1;i<=num;i++){
        result.push(i);  
    } 
      for(let i=0;i<result.length;i++){
          if(result[i]%2===0){
           x=x+result[i];
          } 
      }
console.log(x);
};

//3 
const avg=function(num){
    let x=0;
   for(let i=0;i<num.length;i++){
           x=x+num[i];
      }
      x=x/num.length;
console.log(x);
};

//4 
const reverse=function(words){
    const letter=words.split("");
   const letter2=letter.reverse();
   console.log(letter.join(''));
};

//5
const addDashes=function(words){
   console.log(words.join('-'));
};


//6 
const countUpAndDown=function(num){
    let result=[];
    let x=0;
    let y=[];
    for(let i =1;i<=num;i++){
        result.push(i);  
    } 
      for(let i=0;i<result.length;i++){
           y.push(result[i]);
        
        }
        let length_array=result.length-2;
        for(let i=length_array;i>=0;i--){
            y.push(result[i]);
        }
      
console.log(y.join(" "));
};
 

//7

 const wordsWithA=function(listWord){
  const x=[];
  for(let i =0;i<listWord.length;i++){
      if(listWord[i].indexOf('a')> -1){
        x.push(listWord[i]);
      }
  } console.log(x);
  }


//8 

const wordsWithLetter=function(letter,listWord){
    const x=[];
    for(let i =0;i<listWord.length;i++){
        if(listWord[i].indexOf(letter)> -1){
          x.push(listWord[i]);
        }
    } console.log(x);
    };


//9 

const longestWord=function(seq){
    let longest = 0;
    let word = null;
    const words=seq.split(" ");
    console.log(words);
    for(let i =0; i<words.length;i++){
        if(words[i].length > longest){ 
            longest = words[i].length; 
            word=words[i];
          }

    }
    console.log(word);
};



//10 
const largestEvenNumber=function(seq){
    const x=[];
    let y=0;
    let result=0;
    let b=0;
    for(let i=0;i<seq.length;i++){
        if(seq[i]%2===0){
            x.push(seq[i])
        }
        console.log(x);//[2,10,4,0] length=4
        for(let i=0;i<x.length;i++){
            b=x[i];//b=2 b=10 b=4
            if(result>b){//2 >10 , 10>4 , 4>0
               return result ;
            }else {
               result= b; 
            }

        }

      }
      console.log(result);
};
