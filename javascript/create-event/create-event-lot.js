function next_step1() {
	document.getElementById("step-1").style.display = "none";
	document.getElementById("step-2").style.display = "block";
	// document.getElementById("active2").style.color = "red";
}

function next_step2() {
	document.getElementById("step-2").style.display = "none";
	document.getElementById("step-4").style.display = "block";
	// document.getElementById("active3").style.color = "red";
}

function next_step3() {
	document.getElementById("step-2").style.display = "none";
	document.getElementById("step-3").style.display = "block";
	// document.getElementById("active3").style.color = "red";
}
