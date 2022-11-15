let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	
	let p = document.createElement("p")
p.innerHTML="Hello World"
p.style.background = "yellow"

document.body.appendChild(p)
});