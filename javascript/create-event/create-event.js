var loadBackground = function (event) {
	var reader = new FileReader();
	reader.onload = function () {
		var output = document.getElementById("image-photo-preview");
		output.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
};

var loadComplement = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};