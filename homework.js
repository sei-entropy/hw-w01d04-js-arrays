const summation = function(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;

    console.log(i);
  }

  // console.log(15 'because' + 1+2+3+4+5 +  ' = ' + total);
  console.log(total);
};

/// 2

const summationEven = function(n) {
  let total = 0;
  let count = n;
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) {
      total = total + i;

      console.log(i);
    }
  }
  console.log(total);
};

/// 3

const aveFunction = function(arry) {
  let total = 0;

  for (let i = 0; i < arry.length; i++) {
    total += arry[i]; //don't forget to add the base
  }

  let ave = total / arry.length;

  return ave;
};

/// 4

function reverseString(str) {
  let revString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}

reverseString("Ali");

////5

const addDashes = function(dash) {
  let arr = [];
  arr.push(dash);
  arr.join("-");
};

let a = [1, 2, 3];

///6

const countUpAndDown = function(str) {
  let countString = "";

  for (let i = 0; i < str.length; i++) {
    console.log(i);
  }

  //return countString;
};
