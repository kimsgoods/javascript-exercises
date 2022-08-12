const findTheOldest = function(people) {
       const oldest = inventors.sort(function(a, b) {
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearOfBirth;
        return lastInventor > nextInventor ? -1 : 1;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
