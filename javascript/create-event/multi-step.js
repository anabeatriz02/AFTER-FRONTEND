function next_step1() {
	document.getElementById("step-1").style.display = "none";
	document.getElementById("step-2").style.display = "block";
	// document.getElementById("active2").style.color = "red";
}
// Function that executes on click of first previous button.
// function prev_step1() {
// 	document.getElementById("first").style.display = "block";
// 	document.getElementById("second").style.display = "none";
// 	document.getElementById("active1").style.color = "red";
// 	document.getElementById("active2").style.color = "gray";
// }
// Function that executes on click of second next button.
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
