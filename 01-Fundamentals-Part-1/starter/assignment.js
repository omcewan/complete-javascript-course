/* TODO: Values and Variables Assignment
let country = 'United States of America';
let continent = 'North America';
let population = 330000000;
console.log(country, continent, population);

 TODO: Data types Assignment
let isIsland = false;
let language;
console.log(isIsland, population, country, language);

TODO: Coding challenge #1
let johnsMass, marksMass;

function BMI(mass, heigth) {
  return mass / heigth ** 2;
}

johnsMass = BMI(92, 1.95);
marksMass = BMI(78, 1.69);
const markHigherBMI = marksMass > johnsMass;
console.log(johnsMass, marksMass, markHigherBMI);

TODO: Coding Challenge 2

if (johnsMass > marksMass)
  console.log(
    `John's BMI of ${johnsMass} is higher than Mark's BMI of ${marksMass}`
  );
else
  console.log(
    `Mark's BMI of ${marksMass} is higher than John's BMI of ${johnsMass}`
  );


TODO: Coding Challenge 3
function average(a, b, c) {
  return (a + b + c) / 3;
}

let dolphinScore = average(97, 112, 86);
let koalasScore = average(109, 95, 81);

if (dolphinScore === koalasScore) {
  if (dolphinScore < 100) {
    console.log(
      'We have a draw but no team wins since the minimum score was not met!'
    );
  } else {
    console.log(`The game is a draw, both team has a score of ${dolphinScore}`);
  }
} else if (dolphinScore > koalasScore) {
  if (dolphinScore < 100) {
    console.log('Minimum score not reached! There is no winner!');
  } else {
    console.log(
      `Your Champions are the Dolphins with a score of ${dolphinScore}`
    );
  }
} else {
  if (koalasScore < 100) {
    console.log('Minimum score not reached! There is no winner!');
  } else {
    console.log(`Your Champions are the Koalas with a score of ${koalasScore}`);
  }
}


let day = 'monda';

if (day === 'monday') {
  console.log('Plan course structure');
} else if (day === 'tuesday') {
  console.log('Prepare theory videsos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Practice python or javascript');
} else if (day === 'friday') {
  console.log('prepare for the weekend!');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Have a good weekend');
} else console.log('What day is it');

*/

// TODO: Code Challenge #4
let bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was $${bill} and the tip is $${tip}. The total bill comes up to $${
    bill + tip
  }!`
);
