function showMe(it, elem) {
	var elems = document.getElementsByClassName("cb");
	var currentState = elem.checked;
	var elemsLength = elems.length;

	for (i = 0; i < elemsLength; i++) {
		if (elems[i].type === "checkbox") {
			elems[i].checked = false;
		}
	}
	elem.checked = currentState;
	var elements = document.getElementsByClassName("ocult");
	for (j = 0; j < elements.length; j++) {
		if (elements[j].id != it || currentState == false) {
			elements[j].style.display = "none";
		} else {
			elements[j].style.display = "block";
		}
	}
}
