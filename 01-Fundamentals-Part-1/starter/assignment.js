// Values and Variables Assignment
let country = 'United States of America';
let continent = 'North America';
let population = 330000000;
// console.log(country, continent, population);

// Data types Assignment
let isIsland = false;
let language;
// console.log(isIsland, population, country, language);

// TODO: Coding challenge #1
let johnsMass, marksMass;

function BMI(mass, heigth) {
  return mass / heigth ** 2;
}

johnsMass = BMI(92, 1.95);
marksMass = BMI(78, 1.69);
const markHigherBMI = marksMass > johnsMass;
// console.log(johnsMass, marksMass, markHigherBMI);

//TODO: Coding Challenge 2

if (johnsMass > marksMass)
  console.log(
    `John's BMI of ${johnsMass} is higher than Mark's BMI of ${marksMass}`
  );
else
  console.log(
    `Mark's BMI of ${marksMass} is higher than John's BMI of ${johnsMass}`
  );
