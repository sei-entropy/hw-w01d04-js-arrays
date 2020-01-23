function numberSum(n) {
    let total = 0;
      for(let i = 1; i <= n; i++){
        total += i;
      }
      return total;
  }


  function numberEven(n){
    let sum = 0;
    for(let i = 1; i< n; i++) {
    if(i % 2 === 0) {
    sum = sum + i;
    }
    }
    return sum;
    }

    function numberAvg(n){
        var sum = 0;
        for(var i in n) {
            sum += n[i];
        }
        var numbersCnt = n.length;
        return (sum / numbersCnt);
    }


    function reverseString(str) {
        let splitString = str.split(""); 
     
        let reverseArray = splitString.reverse(); 
         let joinArray = reverseArray.join("");
            return joinArray; 
    }

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