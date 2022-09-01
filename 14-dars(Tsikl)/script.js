"use strict"

let startNum = 1;

// sikl yashashning 3 xil yo'li bor

// first
// while(startNum < 100){
//     console.log(startNum);
//     startNum++
// }

// second
// do{
//     console.log(startNum);
//     startNum++;
// }while(startNum <= 10)

// Third 
for(let i = 0; i < 10; i++){
    if(i === 8){
        continue;
    }
    console.log(i);
}