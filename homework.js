//Q1

function num (N) {
    let sum = 0;
      for(let i = 1; i <= N; i=i+1){
        sum= sum + i;
      }
      return sum;
  }

  // Q2

  const num =[1,2,3,4,5]
  let sum= 0;
  for (let i=0; i<num.length; i++){
    if(num[i]%2===0) {
    sum+=num[i];
    }
  }
  console.log(sum)

  //Q3
  const num =[8,2,2,4]
  let sum= 0;
  for (let i=0; i<num.length; i++){
        sum+=num[i];

  }
  console.log(sum/num.length);

  //Q4


const reverseString= function(str){
 return str.split("").reverse().join("");
}
reverseString("caterpillar")


//Q5

const addDashes= ['test1', 'test2', 'test3']  
addDashes.join("-");




