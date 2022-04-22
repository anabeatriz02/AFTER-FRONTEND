var loadBackground = function (event) {
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById("image-background-preview");
		output.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
};

var loadProfile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('image-profile-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};