function inputVal() {
    let inputValue = document.getElementById("inputValue").value;
    trans(inputValue);
}
function trans(str){
    let answer = "";
    for(let i = 0; i < str.length; i++){
		if(str[i] === str[i].toUpperCase()){
    		answer += str[i].toLowerCase();
    	} else answer += str[i].toUpperCase();
    }
    document.getElementById("value").innerHTML = "결과: " + answer;
}

