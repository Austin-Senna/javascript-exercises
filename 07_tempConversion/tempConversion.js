const math = require("mathjs");

const convertToCelsius = function(temp) {
  cTemp = 5/9 * (temp -32)
  return pround(cTemp)
};

const convertToFahrenheit = function(temp) {
  fTemp = 9/5 * (temp) + 32
  return pround(fTempx)
};

function pround(num){
  return math.round(num * 10)/10
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
