"use strict"
alert('Kino.uz saytiga xush kelibsiz!')
let numberOfSeries = prompt('Nechta serial ko\'rdingiz?')

let seriesDB = {
    count: numberOfSeries,
    series: {

    },
    actors: {

    },
    genres: [],
    privat: false
}

for(i = 0; i < 2; i++){
    let index = i;
    let firstQuestion = prompt(`${++index}-Oxirgi ko\'rgan serialingiz?`);
    let secondQuestion = prompt(`'${firstQuestion}' serialiga necha baho berasiz?`);
    seriesDB.series[`${firstQuestion}`] = secondQuestion;
}

/* 
Samar akani kodlari:
'use strict'

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
}

const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const b = prompt('Necha baxo berasiz', '')
const c = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const d = prompt('Necha baxo berasiz', '')

seriesDB.series[a] = b
seriesDB.series[c] = d

console.log(seriesDB)
*/
