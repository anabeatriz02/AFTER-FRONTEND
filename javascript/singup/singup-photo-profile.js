var loadBackground = function (event) {
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById("profile-image-preview");
		output.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
};


var loadBackgroundProfile = function (event) {
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById("profile-image-preview");
		output.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
};
