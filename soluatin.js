// solution of 1
const summation = function (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum+i;
    }

    return sum;
}
 summation(5)


// solution of 2

const summationEven = function (num) 
{
  let sum = 0;
if (num % 2 ==0)
{
for (let i = 1; i <= num; i++) 
{
        sum = sum+i;
}

    return sum;
} 
};
summationEven(8)


// solution of 3

const average = function (num) {
    let sum = 0;

    for (let i = 0; i <= num.length-1; i++) 
    {
        sum = sum+num[i];
    }

    return sum / num.length;
}
average([8,2,2,4])


// solution of 4

const reverseWord = function (word) {
    let toReverseWord = " ";

    for (let i = word.length -1; i >= 0; i=i-1) {
        toReverseWord =  toReverseWord + word [i];
    }

    return toReverseWord;
}
reverseWord("caterpillar")


// solution of 5

const addDashes = function (word) {
    let output = " ";

    for (let i = 0; i <= word.length -1 ; i++) {
        output +=  word[i];
        if (i !== word.length - 1)
        output = output+ "-";
    }

    return output;
}
addDashes(['test 1', 'test 2', 'test3'])


