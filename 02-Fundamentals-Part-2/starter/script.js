'use strict';
// TODO: Coding Challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphinsAverage = calcAverage(85, 54, 41);
let kolasAverage = calcAverage(23, 34, 27);

// console.log(dolphinsAverage, kolasAverage)

function checkWinner(dolphinsAverage, kolasAverage) {
  if (dolphinsAverage > kolasAverage && dolphinsAverage/kolasAverage >= 2) {
    console.log(`Team Dolphins is the winner with an average of ${dolphinsAverage} points!`)
  } else if (kolasAverage > dolphinsAverage && kolasAverage/dolphinsAverage >= 2) {
    console.log(`Team Kolas is the winner with an average of ${kolasAverage} points!`)
  } else {
    console.log('Score requirement not me, thus we cannot delcare a winner!')
  }
}

checkWinner(dolphinsAverage, kolasAverage)