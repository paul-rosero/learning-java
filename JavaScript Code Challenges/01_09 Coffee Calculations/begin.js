/*
  WRITE YOUR SOLUTION HERE
*/

function totalPrice(arr) {
  const total = arr.reduce((total, currentValue) => (total += currentValue));
  return `The total bill is $${total * 1.25}`;
};

console.log(totalPrice([2,4,5]));