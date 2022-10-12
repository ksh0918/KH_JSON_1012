// let sum1 = sum(21, 24);
// console.log(sum1, sum2);
// let firstVal;
// let secondVal;
// let op;

// function inputFst(n) {
//     firstVal = n;
// }
// function inputSec(n) {
//     secondVal = n;
// }
// function inputOp(oper) {
//     op = oper;
// }

// function inputEnter(){
//     switch(op) {
//         case "+" : 
//             document.write("<h1>" + (firstVal+secondVal) + "</h1>");
//             break;
//         case "-" : 
//             document.write("<h1>" + (firstVal-secondVal) + "</h1>");
//             break;
//         case "*" : 
//             document.write("<h1>" + (firstVal*secondVal) + "</h1>");
//             break;
//         case "/" : 
//             document.write("<h1>" + (firstVal/secondVal) + "</h1>");
//             break;
//     }
// }

// const gugudan = function() {
//     for(let i = 1; i < 10; i++) {
//         console.log(`3 * ${i} = ${3 * i}`);
//     }
// }
// // gugudan();
// let test = gugudan;
// test();

// const gugudan2 = (dan) => {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`;)
//     }
// }
// gugudan2(3)

function sum() {
    let a = 10;
    console.log(`함수 내부 : ${a}`);
}
sum();
console.log(`함수 외부 : ${a}`);