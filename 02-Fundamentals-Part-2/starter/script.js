'use strict';
// TODO: Coding Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinsAverage = calcAverage(85, 54, 41);
let kolasAverage = calcAverage(23, 34, 27);

// console.log(dolphinsAverage, kolasAverage)

function checkWinner(dolphinsAverage, kolasAverage) {
  if (dolphinsAverage > kolasAverage && dolphinsAverage / kolasAverage >= 2) {
    console.log(
      `Team Dolphins is the winner with an average of ${dolphinsAverage} points!`
    );
  } else if (
    kolasAverage > dolphinsAverage &&
    kolasAverage / dolphinsAverage >= 2
  ) {
    console.log(
      `Team Kolas is the winner with an average of ${kolasAverage} points!`
    );
  } else {
    console.log('Score requirement not me, thus we cannot delcare a winner!');
  }
}

// checkWinner(dolphinsAverage, kolasAverage)

// TODO: Coding Challenge 2
function calcTip(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}
// console.log(calcTip(100))

const bills = [125, 555, 44];
const tips = [];
const total = [];

// calculate the tip and push the tip to the tips array
bills.forEach((bill) => tips.push(calcTip(bill)));
// console.log(tips)

// calculate the total, bill + tip and push value to total array
bills.forEach((bill, index) => {
  total.push(bill + tips[index]);
});
// console.log(total)

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2046 - 1999,
  job: 'Teacher',
  location: 'Portugal',
  friends: ['Julian', 'Reshon', 'Keivon'],
};

const jonasStry = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends name is ${jonas.friends[0]}!`
// console.log(jonasStry)