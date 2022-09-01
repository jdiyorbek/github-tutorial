"use strict"

// const age = +prompt('How old are you?', '')

// if(age > 18){
//     console.log('Welcome')
// }else{
//     console.log('You are not old enough');
// }

/*if(age > 25){
    console.log('Horror films');
} else if (age > 18 && age < 25){
    console.log('Boyevik films');
} else {
    console.log('Carton');
}*/

// age > 25 ? console.log('Horror films') : console.log('Carton')

const color = 'red'

switch(color) {
    case 'red':
        console.log("Stop");
        break;
    case 'yellow':
        console.log('Wait');
        break;
    case 'green':
        console.log('Goo');
        break;
    default:
        console.log('Traffic jam');
        break;
}