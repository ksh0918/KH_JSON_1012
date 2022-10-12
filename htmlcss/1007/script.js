let pwdIp = document.getElementById("userPwd");
let required = document.querySelectorAll("input");
let value;
let warning;

pwdIp.onfocus = () => {
    warning = pwdIp.nextSibling;
    warning.innerText = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";
    warning.style.color = "gray";
};
pwdIp.onblur = () => {
    warning = pwdIp.nextSibling;
    warning.innerText = "";
};

for(let e = 0; e < 3; e++) {
    required[e].onblur = () => {
        value = required[e].value;
        warning = required[e].nextSibling;
        if(value.length < 1){
            warning.innerText = "필수 입력 항목 입니다";
            warning.style.color = "red";
        } else {
            warning.innerText = "";
        }

    }
};