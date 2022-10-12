fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("http://localhost:3000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "리액트 공부",
        author: "곰돌이 사육사"
    }),
    headers: {
        "content-type" : "application/json; charset=UTF-8"
    }
});