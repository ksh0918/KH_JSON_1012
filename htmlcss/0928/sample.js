// let tmp = prompt("정수을 입력 하세요: ");
// let num = Number(tmp);
// let sum = 0;
// for(let i = 0; i <= num; i++) {
//     sum += i;
// }
// document.write("<h3>입력 받은 정수의 합은 " + sum + "입니다.</h3>");

// let name = "경기도 수원시 권선구 권선동"
// document.getElementById("data").innerHTML = name;

// function primeMain() {
//     let sum = 0;
//     let number = document.getElementById("name").value
//     for(let i = 0; i <= number; i++) {
//         sum += primeNumber(i);
//     }
//     document.write("=" + sum);
// }
// function primeNumber(number) {
//     let cnt = 0;
//     for(let i = 1; i <= number; i++) {
//         if(number % i == 0) {cnt++};
//     }
//     if(cnt == 2) {
//         document.write(number + " + ");
//         return number;
//     } else{
//         return 0;
//     }
// }

// let a, b, c;
// let min, max;
// a = prompt("첫 번째 정수을 입력 하세요: ");
// b = prompt("두 번째 정수을 입력 하세요: ");
// c = prompt("세 번째 정수을 입력 하세요: ");

// min = Math.min(a, b, c);
// max = Math.max(a, b, c);

// document.write("<h3>제일 큰 값: " + max + "</h3>")
// document.write("<h3>제일 작은 값: " + min + "</h3>")

// let tmp, hour, min, t;
// tmp = prompt("시간 입력: ");
// hour = Number(tmp);
// tmp = prompt("분 입력: ");
// min = Number(tmp);
// t = (hour * 60) + min - 45;
// document.write("<p>" + parseInt(t/60) + "시 " + t%60 +"분</p>");


// let score;
// while(true) {
//     score = Number(prompt("성적 입력: "));
//     if(score <= 100 && score >= 0) break;
//     else alert("성적 재입력");
// };
// if (score >= 90) document.write("<p>A학점 입니다.</p>");
// else if (score >= 80) document.write("<p>B학점 입니다.</p>");
// else if (score >= 70) document.write("<p>C학점 입니다.</p>");
// else if (score >= 60) document.write("<p>D학점 입니다.</p>");
// else document.write("<p>F학점 입니다.</p>");


let num = Number(prompt("정수 입력: "));
for(let i = 1; i <= num*num; i++) {
    if(i%num == 0){
        document.write("<span>" + i + "</span></br>");
    } else{
        document.write("<span>" + i + "</span>");
    };
};


// for(let i = 1; i <= 1000; i++) {
//     if(i % 7 == 0 && i % 10 == 0) document.write("<span>" + i + "</span></br>");
//     else if(i % 7 == 0) document.write("<span>" + i + "</span>");
// }