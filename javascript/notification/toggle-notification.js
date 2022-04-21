const news = document.querySelector(".new");
const olds = document.querySelector(".old");
const switchs = document.querySelector(".switch");
const form = document.querySelector("#form");
const pageNew = document.querySelector(".page-new");
const pageOld = document.querySelector(".page-old");

function tab2() {
	
		news.style.borderBottom = "none";
		olds.style.borderBottom = "3px solid #7f37ff";
		news.style.color = "#FFFFFF";
		olds.style.color = "#7f37ff";
		pageOld.style.marginLeft = "-100%";

}

function tab1() {
	olds.style.borderBottom = "none";
	news.style.borderBottom = "3px solid #7f37ff";
	olds.style.color = "#FFFFFF";
	news.style.color = "#7f37ff";
	pageNew.style.marginRight = "100%";
}

// function toggle_visibility(id) {
// 	var old_e = document.getElementById(top.visible_div_id);
// 	var new_e = document.getElementById(id);
// 	if (old_e) {
// 		console.log("old", old_e, "none");
// 		old_e.style.display = "none";
// 	}
// 	console.log("new", new_e, "block");
// 	new_e.style.display = "block";
// 	top.visible_div_id = id;
// }

// var btnNew = document.querySelectorAll(".new");
// var btnOld = document.querySelectorAll(".old");

// for (var i = 0; i < buttons.length; i++) {
// 	btnNew[i].onclick = function () {
// 		olds.style.borderBottom = "none";
// 		news.style.borderBottom = "3px solid #7f37ff";
// 		olds.style.color = "#FFFFFF";
// 		news.style.color = "#7f37ff";
// 		pageNew.style.marginRight = "100%";
// 	};
// 	btnOld[i].onclick = function () {
// 		news.style.borderBottom = "none";
// 		olds.style.borderBottom = "3px solid #7f37ff";
// 		news.style.color = "#FFFFFF";
// 		olds.style.color = "#7f37ff";
// 		pageOld.style.marginLeft = "-100%";
// 	};
// }
