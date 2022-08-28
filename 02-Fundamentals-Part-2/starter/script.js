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
  hasDriversLicense: false,
  getSummary: function () {
    return `${this.firstName} is a ${this.age} age old ${this.job}, who ${
      this.hasDriversLicense
        ? 'has a drivers license!'
        : 'does not have a drivers license!'
    }`;
  },
};

const jonasStry = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends name is ${jonas.friends[0]}!`;
// console.log(jonasStry)
// console.log(jonas.getSummary());

// TODO: Coding Challenge 3
let markData = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    let mass = this.mass;
    let height = this.height;
    this.BMI = mass / height ** 2;
    return this.BMI;
  },
};

let johnData = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    let mass = this.mass;
    let height = this.height;
    this.BMI = mass / height ** 2;
    return this.BMI;
  },
};

johnData.calcBMI();
markData.calcBMI();

/* johnData.BMI > markData.BMI
  ? console.log(
      `${johnData.firstName} ${johnData.lastName}'s BMI(${johnData.BMI}) is higher than ${markData.firstName} ${markData.lastName}'s BMI(${markData.BMI})!`
    )
  : console.log(
      `${markData.firstName} ${markData.lastName}'s BMI(${markData.BMI}) is higher than ${johnData.firstName} ${johnData.lastName}'s BMI(${johnData.BMI})!`
    );
*/

// TODO: Challenge 4

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// for (let i = 0; i < 10; i++) {
//   const bill = Math.floor(Math.random() * 100);
//   newBills.push(bill);
// }

// console.log(newBills)

const newTips = [],
  newTotals = [];

// newBills.forEach((bill, idx) => {
//   newTips.push(calcTip(bill));
//   newTotals.push(newBills[idx] + newTips[idx]);
// });

for (let i = 0; i < newBills.length; i++) {
  newTips.push(calcTip(newBills[i]));
  newTotals.push(newTips[i] + newBills[i]);
}

// console.log(newBills, newTips, newTotals);

function _calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

console.log(_calcAverage(newTotals));
