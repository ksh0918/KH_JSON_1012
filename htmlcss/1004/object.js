// let dDay = new Date("2022-12-26");
// let now = new Date();

// let toNow = now.getTime();
// let toDay = dDay.getTime();
// let remainTime = toDay - toNow;
// // 24시간 * 60분 * 60초 * 1000ms
// remainTime = Math.round(remainTime/(1000*60*60*24));

// document.getElementById("result").innerText = remainTime;

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 이미 1이란 값이 저장되어 있기 때문에 추가되지 않음
console.log(mySet.size); // 3
console.log(mySet.has(4));