const { isNumber } = require("mathjs");

const sumAll = function(a,b) {
    
    let sum = 0
    if (isNumber(a) && isNumber(b)) 
    {
        if (a>= 0 && b>=0){
            if (a>b){
                temp = a
                a = b
                b = temp
            }
              for (a; a <= b; a++) {
                sum = sum + a
            }
    return sum}
    }
    return "ERROR"
};

console.log(sumAll(2,3))

// Do not edit below this line
module.exports = sumAll;
