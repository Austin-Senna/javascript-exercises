const repeatString = function(iString, n) {
    nString =""
    
    if (n<0) {
        return "ERROR"
    }
    for (let i = 0; i < n; i ++) {
        nString += iString
    }

    return nString
};

// Do not edit below this line
module.exports = repeatString;
