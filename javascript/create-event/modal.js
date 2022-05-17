var modal = document.getElementById("modal-form-window");
modal.addEventListener("click", function (e) {
	if (e.target == this) fecha();
});

function abre() {
	modal.style.display = "block";
}

function fecha() {
	modal.style.display = "none";
}

