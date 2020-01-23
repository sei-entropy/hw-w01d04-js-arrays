//Q1

onst  summation = function (n) {
    let output = 0;
    for( i = 1;  i <= n; i++) {
      output = output  + i;
    }
    return output ;
  };
  
  let n = 5 ;
  console.log('Sum of numebers from 1 to '+ n +' is '+ summation(n));


  //Q2

  const summationEven = function (n){
    let sum = 0 ;
   
   for ( i=0; i <=n; i=i+2) {
     sum +=1
     }
   return sum ;
   
   };
    let n = 6
   console.log(summationEven(n));


   //Q3

   const avg=[8, 4, 2, 4];

const getAvg = function () {
  
 for (i = 0 ; i< avg.length ;i++) 
 {
   if (avg[i] === avg.length ){
     
   avg= avg[i] + avg[i]; 
   }
  return avg[i] / avg.length ;
}
};

 console.log(getAvg())

 //Q4 


 

  