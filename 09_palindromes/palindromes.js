
const palindromes = function(string) {
    string = string.toLowerCase()
    let filtered = string.split("").filter((x) => isCharacter(x) || isNumeric(x))
    let reversed = [...filtered].reverse()
    console.log(filtered)
    console.log(reversed)
    return filtered.join("") == reversed.join("")
};

function isCharacter(c) {
    return c.toLowerCase() != c.toUpperCase()
}

function isNumeric(c) {
    return c == +c && ! (c==0)
}


console.log(palindromes("ra  !c3e3car !"))

// Do not edit below this line
module.exports = palindromes;
