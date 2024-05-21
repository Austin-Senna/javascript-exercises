const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a -b
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total += currentValue, 0)
};

const multiply = function(array) {
  return array.reduce((total,currentValue) => total *= currentValue)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  var total = 1
  for (var i = a; i>=0; i--) {
    if (i==0) {
      total*1
      continue
    }
    total*= i
  }
  return total
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
