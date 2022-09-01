"use strict"
alert('Kino.uz saytiga xush kelibsiz!')
let numberOfSeries = +prompt('Nechta serial ko\'rdingiz?')

let seriesDB = {
    count: numberOfSeries,
    series: {

    },
    actors: {

    },
    genres: [],
    privat: false
}


for(let i = 0; i < 2; i++){
    let index = i;
    let firstQuestion = prompt(`${++index}-Oxirgi ko\'rgan serialingiz?`);
    let secondQuestion = prompt(`'${firstQuestion}' serialiga necha baho berasiz?`);
    if(firstQuestion != '' && secondQuestion != '' && firstQuestion != null && secondQuestion != null){
        seriesDB.series[`${firstQuestion}`] = secondQuestion;
    }else{
        i--
    }
}


if(seriesDB.count <= 5){
    console.log('Kam serial ko’ripsiz');
}else if(seriesDB.count > 5 && seriesDB.count <= 10){
    console.log('Siz classik tamoshabin ekansiz');
}else if(seriesDB.count > 10){
    console.log('Siz serialchi zvezda ekansiz');
}