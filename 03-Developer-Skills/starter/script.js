// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// TODO: Coding Challenge 1

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

function printForecast(temps) {
  let foreCast = '...';

  for (let i = 0; i < temps.length; i++) {
    foreCast += `${temps[i]}°C in ${i + 1} days...`;
  }

  console.log(foreCast);
}
printForecast(data1);
printForecast(data2);
