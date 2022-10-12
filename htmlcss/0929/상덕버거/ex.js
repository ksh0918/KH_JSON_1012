/* let desc = "안녕하세요 \n\\ 저는 \"곰돌이\t사육사\" \\입니다.";

// 템플릿 문자열: 백틱 ` ${변수}` "문자열" '문자열'
console.log(`백틱을 사용해 봅시다.... ${desc}...........`);
console.log("백틱을 사용해 봅시다...." + desc + "..........."); */

// 객체 리터럴
// let score = [88, 77, 65, 86]; //국어, 영어, 수학, 과학
// let scoreObj = [{
//     korSc : 88, 
//     engSc : 77, 
//     matSc : 65, 
//     scnSc : 86
// }, {
//     korSc : 99, 
//     engSc : 88, 
//     matSc : 77, 
//     scnSc : 66
// }, {
//     korSc : 100, 
//     engSc : 99, 
//     matSc : 98, 
//     scnSc : 97
// }];

// for(let i = 0; i < scoreObj.length; i++) {
//     console.log(`${i+1}번째 사람의 국어 성적: ${scoreObj[i].korSc}`);
//     console.log(`${i+1}번째 사람의 국어 성적: ${scoreObj[i].engSc}`);
//     console.log(`${i+1}번째 사람의 국어 성적: ${scoreObj[i].matSc}`);
//     console.log(`${i+1}번째 사람의 국어 성적: ${scoreObj[i].scnSc}`);
//     console.log("-----------------------------------");
// };

// let name = {
//     city: ["서울", "부산", "인천", "대구", "대전", "광주"],
//     fruits: ["바나나", "사과", "오렌지", "수박", "딸기"]
// };
// console.log(name.city[2]);

let menu = [];
let menuName = ["상덕버거", "중덕버거", "하덕버거", "콜라", "사이다"];
let tmp;
for(let i = 0; i < 5; i++){
    while(true){
        tmp = prompt(`${menuName[i]} 가격 입력: `);
        if(tmp <= 2000 && tmp >= 100) break;
    }
    menu[i] = tmp;
};

for(let i = 0; i < 5; i++){
    document.querySelector(`ul>li:nth-of-type(${i+1})>p:last-of-type`).innerText = menu[i] + "원";
};

document.querySelector('ul>li:last-child').innerHTML
= `<img src="./1653436847042.png"><p>가장 저렴한 세트</p><p>${Math.min.apply(null, menu.slice(0,3))
    +Math.min.apply(null, menu.slice(3,5))-50}원</p>`;

