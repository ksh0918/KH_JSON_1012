let idnum;
let year, mon, day, gender, age;

while(true){
    idnum = prompt("주민등록번호 입력: ");
    if((idnum[7] > 5) || 
        ((idnum[7] > 2) && (idnum.slice(0,2) > 22)) || 
        (idnum.length != 14) || 
        (idnum.slice(2,4) > 12) ||
        (idnum.slice(4,6) > 31) ||
        (idnum.indexOf("-") == -1)){
        alert("유효하지 않은 주민등록번호입니다. 재입력하세요.")
    } else break;
}

if(idnum[7] < 3) year = Number(idnum.slice(0,2)) + 1900;
else year = Number(idnum.slice(0,2)) + 2000;
mon = Number(idnum.slice(2,4));
day = Number(idnum.slice(4,6));
if(idnum[7] % 2 == 0) gender = "여성";
else gender = "남성";
age = new Date().getFullYear() - year + 1;

document.querySelector(`ul`).innerHTML += `<li><span>생년월일</span> ${year}년 ${mon}월 ${day}일</li>`;
document.querySelector(`ul`).innerHTML += `<li><span>성별</span> ${gender}</li>`;
document.querySelector(`ul`).innerHTML += `<li><span>나이</span> ${age}세</li>`;
