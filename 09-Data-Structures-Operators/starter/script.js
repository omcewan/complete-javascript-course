'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  // ...players is already an array so do not need to create a new array. goalScorers does not need to be created.
  const goalScorers = [...players];
  for (let i = 0; i < goalScorers.length; i++) {
    console.log(goalScorers[i]);
  }
  console.log(`Goals Scored: ${goalScorers.length}`);
};

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
console.log((team1 < team2 && 'team1') || (team2 < team1 && 'team2'));

const { scored } = game;
console.log(scored);

for (const [idx, scorer] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${scorer}`);
}

let averageOdds = 0;
const totalOdds = Object.values(game.odds);
for (const [key, value] of Object.entries(game.odds)) {
  averageOdds += value;
}
console.log(averageOdds / totalOdds.length);

for (const [key, value] of Object.entries(game.odds)) {
  console.log(`Odds of victory ${key == 'x' ? 'Draw' : game[key]}: ${value}`);
}

const scorers = {};

for (const [idx, scorer] of game.scored.entries()) {
  if (!scorers[scorer]) {
    scorers[scorer] = 1;
  } else {
    scorers[scorer] += 1;
  }
}
console.log(scorers);

// Challenge three
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

gameEvents.forEach((value, key) => {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
});

// Coding Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

function convertTextCamelCase() {
  let newStr = '';
  const textStr = document.querySelector('textarea').value;
  const strArr = textStr.split('\n');
  let longestStr = 0;
  const camelCaseArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let str = strArr[i].toLowerCase().trimStart().trimEnd().split('_');

    for (let j = 0; j < str.length; j++) {
      if (j == str.length - 1) {
        const upperCaseStr = str[j].replace(str[j][0], str[j][0].toUpperCase());
        str[j] = upperCaseStr;
      }
    }
    str = str.join('');
    if (str.length > longestStr) {
      longestStr = str.length;
    }
    camelCaseArr.push(str);
  }
  // console.log(longestStr);
  // console.log(camelCaseArr);
  for (let [idx, wrd] of camelCaseArr.entries()) {
    let emojiWrd = wrd.padEnd(longestStr + 4, ' ') + '✅'.repeat(++idx);
    newStr += emojiWrd + '\n';
    console.log(emojiWrd);
  }
  document.querySelector('textarea').value = newStr;
}

const element = document.querySelector('button');
element.addEventListener('click', convertTextCamelCase);
