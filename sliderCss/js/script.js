var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password");
var storage = localStorage.getItem("login");

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".map-close")
				
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function (evt) {
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-eror");
	evt.preventDefault();
});

form.addEventListener("submit" ,function (evt) {
	if (!login.value  || !password.value) {
		evt.preventDefault();
		popup.classList.add("modal-eror");
	} else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode ===27) {
		if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
	}
	}
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode ===27) {
		if (mapPopup.classList.contains("map-show")) {
		mapPopup.classList.remove("map-show");
	}
	}
});