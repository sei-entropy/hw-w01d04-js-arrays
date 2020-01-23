
const summation = function(num){
    let sum = 0;
    for(let i =1;i<=num;i++){
        
        sum+=i
    }
    
    return sum;
}



const summationEven =function(num){
let sum =0;
for(let i=0;i<=num;i++){
if(i%2 ==0)
{

    sum +=i;
    
}


}
return sum;
};


const avg = function(arry){
    let sum = 0;
    for(let i =0;i<arry.length;i++)
    {
        sum+= arry[i];
    }
return sum/arry.length;
}
avg([8, 2, 2, 4])

const reverse = function(words){
  
    return words.split("").reverse().join("").split(" ").reverse().join(" ")
}
reverse("caterpillar")


const addDashes =function(words){
    return words.join("-");
}
addDashes(['test1', 'test2', 'test3'])




const countUpAndDown = function(num){
    let numbers =[];
    for(let i=num;i>0;i--)
    {
        numbers.push(i);
        numbers.unshift(i);
    }
    return numbers;
}
const wordsWithA = function(words){

for(let i =0;i<words.length;i++)
{
    if(words[i].includes("a"))
    {
        return words[i];
    }
}
}
wordsWithA(['cat', 'rabbit', 'dog', 'frog'])

const wordsWithLetter = function(letter,words){
    let list =[];
for(let i=0;i<words.length;i++)
{
    
    if(words[i].includes(letter))
    {
        list.push(words[i]);
    }
    
}
        return list;
}
wordsWithLetter("g", ['cat', 'rabbit', 'dog', 'frog'])


const longestWord =function(words){

    let str = words.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;

}
longestWord("The cat in the house")

const largestEvenNumber =function(nums){
            
            let largeEven=0;
        for(let i=0;i<=nums.length;i++){
        if(nums[i]%2==0)
        {
            if(nums[i]>largeEven)
            {
                largeEven = nums[i];
            }
          
        }

        }
        return largeEven;
    }


largestEvenNumber([1,2,3,10,4,7,0])