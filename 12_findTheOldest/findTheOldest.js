const thisYear = (new Date()).getFullYear()
const findTheOldest = function(array) {
    added = [...array].map((x) => {
        if (!x.yearOfDeath) {
            x.yearOfDeath = thisYear
        }
        return x })
    sorted = added.sort((a,b) => (a.yearOfDeath-a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth))
    return sorted[sorted.length-1]
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
