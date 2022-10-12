// let str = "Hello World!! world!"// 입력받은 문자열
// const regEx = /World/; // 검사할 정규식
// console.log(regEx.test(str)); // 대응되는 문자열 포함 여부 확인
// console.log(str.search(regEx)); // 해당 문자열 인덱스 반환(없으면 -1)

// exec(): 인수로 전달된 문자열에서 패턴을 검색하여, 일치하는 문자열을 반환
let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 설정 찾기, 가장 좋은 선물은 용서";
let regEx2 = /가장/g;
let result = regEx2.exec(inputStr);
console.log(result[0]); 