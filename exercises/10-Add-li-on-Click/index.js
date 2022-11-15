let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let p = document.createElement("p")
p.innerHTML="<li>Forth Element</li>"

document.body.appendChild(p)

});
