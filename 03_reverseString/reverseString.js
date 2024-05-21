const reverseString = function(oString) {
    let nString = ""
    for (let i = oString.length - 1; i>=0; i--) {
        nString += oString[i]
    }
    return nString
};

// Do not edit below this line
module.exports = reverseString;
