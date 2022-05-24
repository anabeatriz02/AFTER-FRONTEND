$(".owl-moment").owlCarousel({
	loop: false,
	margin: 5,
	nav: false,
	autoplay: false,
	autoplayTimeout: 1000,
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 5,
		},
		1000: {
			items: 7,
		},
		1600: {
			items: 12,
		}
	},
});
$(".owl-caregory").owlCarousel({
	loop: false,
	margin: 5,
	nav: false,
	autoplay: false,
	autoplayTimeout: 1000,
	dots: false,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 5,
		},
		1000: {
			items: 8,
		},
		1600: {
			items: 15,
		}
	},
});

$(".owl-highlights").owlCarousel({
	loop: true,
	// margin: 10,
	nav: false,
	autoplay: true,
	autoplayTimeout: 3000,
	dots: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});
