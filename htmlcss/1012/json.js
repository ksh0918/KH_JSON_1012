// let memberInfo = [
//     {
//         name : "이영지",
//         age : 21,
//         job : "래퍼",
//         addr : "서울시 강남구 역삼동" 
//     },
//     {
//         name : "미미",
//         age : 24,
//         job : "오마이걸",
//         addr : "서울시 강남구 청담동" 
//     },
//     {
//         name : "안유진",
//         age : 20,
//         job : "아이브",
//         addr : "서울시 강남구 삼성동" 
//     }
// ];
// console.log(memberInfo);
// let json = JSON.stringify(memberInfo);
// let objectJson = JSON.parse(json);
// console.log(objectJson);

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
// xhr.setRequestHeader("content-type", "application/json");

// const data = {
//     userId : 100,
//     id : 100,
//     title : "JSON 전송 테스트 해보기",
//     // author : "곰돌이사육사"
// }

// xhr.send(JSON.stringify(data)); //요청정보
// xhr.onload = () => {
//     if(xhr.status === 201 ) {// 정상적인 응답
//         const res = JSON.parse(xhr.response); // JSON 데이터를 객체로 변경
//         console.log(res);
//     } else {
//         console.log(xhr.status, xhr.statusText); // 응답 상태와 응답 메세지 확인
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method : "POST",
//     body: JSON.stringify({
//         title : "JSON Test",
//         body : "JSON과 비동기 통신에 대해서 연습해봅시다.",
//         userID : 1
//     }),
//     headers: {
//         "content-type" : "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json)); 

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method : "PUT",
//     body: JSON.stringify({
//         id : 1,
//         title : "Fetch API Test",
//         userID : 1
//     }),
//     headers: {
//         "content-type" : "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json)); 

fetch("https://jsonplaceholder.typicode.com/posts/10", {
    method: "DELETE"
});

