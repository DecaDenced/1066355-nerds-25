var modOpen = document.querySelector(".contact-us");
var modal = document.querySelector(".modal-write-us");
var modClose = document.querySelector(".modal-close");
var modForm = modal.querySelector(".modal-form");
var modClName = modal.querySelector(".client-name");
var modClEmail = modal.querySelector(".client-email");
var image = "../img/map-marker-png.svg";

modOpen.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal.offsetWidth = modal.offsetWidth;
	modal.classList.add("modal-write-us-showme");
});

modClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal.classList.remove("modal-write-us-showme");
	modal.classList.remove("modal-error");
});

modal.addEventListener("submit", function(evt) {
	evt.preventDefault();
	modal.classList.remove("modal-error");
	modal.offsetWidth = modal.offsetWidth;
	if (!modClName || !modClEmail) {
		modal.classList.add("modal-error")
	};
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modal.classList.contains("modal-write-us-showme")) {
			evt.preventDefault();
			modal.classList.remove("modal-write-us-showme");
			modal.classList.remove("modal-error");
		}
	}
});

var marker = new google.maps.Marker({
	position: {
		lat: parseFloat(this.cafes[i].latitude),
		lng: parseFloat(this.cafes[i].longitude)
	},
	map: this.map,
	icon: image
});