const add = (a,b) => a+b; 

const subtract = (a,b) => a-b;

const sum = function(array) {
  let total = 0;
  for(let i = 0; i < array.length; i++){
    total += (array[i]);
    
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for(let i = 0; i < array.length; i++){
    total *= (array[i]);
    
  }
  return total;
};

const power = (a,b) => Math.pow(a,b);

const factorial = function(num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
