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
        var output = document.getElementById('first-image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadSecondComplement = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('second-image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadThirdComplement = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('third-image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadFourthComplement = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('fourth-image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadFifthComplement = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('fifth-image-photo-complement-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};