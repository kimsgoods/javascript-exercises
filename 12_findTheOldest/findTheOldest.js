// let findTheOldest = function (people) {
//   const age = x => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;

//   const oldest = people.sort((a, b) =>
//     age(a) > age(b) ? -1 : 1
//   );
//   return oldest[0];
// };

const findTheOldest = function(people) {
  const thisYear = new Date().getFullYear();

  return people.reduce((res, person) => {
    const age = (person.yearOfDeath || thisYear) - person.yearOfBirth;
    return age > res.age ? { person, age } : res;
  }, { person: null, age: 0 }).person;
}


// Do not edit below this line
module.exports = findTheOldest;
