//your code here
const n = Math.floor(Math.random()*100);
const btn = document.getElementById("response");
const answer = document.getElementById("respond");
btn.addEventListener("click",()=>{
	const input = parseFloat(document.getElementById("guess").value);
	if (input > n) {
		answer.innerText = `guess lower`;
	}
	else if(input < n){
		answer.innerText = `guess higher`;
	}
	else{
		answer.innerText = `You got it`;
	}
})