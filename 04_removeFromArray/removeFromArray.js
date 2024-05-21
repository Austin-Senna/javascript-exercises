const removeFromArray = function(oArray, ...args) {
    let checkList = [...args]
    return oArray.filter( (x) => !checkList.includes(x))
    
};

console.log(removeFromArray([1,2,2,3], 3, 2, 4))

// Do not edit below this line
module.exports = removeFromArray;
