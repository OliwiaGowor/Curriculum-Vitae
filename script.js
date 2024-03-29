//hamburger icon opening
function hamburgerIconHandler() {
	document.querySelector('.hamburger-icon-mobile').addEventListener('click', function() {
		this.classList.toggle('open');
		document.querySelector('.header-nav').classList.toggle('open');
		document.querySelector('.header-nav').classList.toggle('mobile');
	});
}
hamburgerIconHandler();


//mobile dropdown opening
function mobileDropdownHandler() {
	var navElements = document.querySelectorAll('.nav-element');
	for (i = 0; i < navElements.length; i++) {
		navElements[i].addEventListener('click', function() {
		document.querySelector('.hamburger-icon-mobile').classList.toggle('open');
		document.querySelector('.header-nav').classList.remove('open');
		document.querySelector('.header-nav').classList.remove('mobile');
		});
	}
}
mobileDropdownHandler();


//website color changing
function websiteColorChanging(themeColor) {
	const colorSelect = document.querySelector('.color-circle');
	const colorStylessheetLink = document.querySelector('.colorStylesheetLink');
	const currentColor = localStorage.getItem("color") || "pink";

	colorStylessheetLink.setAttribute("href", `css/colors/${themeColor}.css`);
	localStorage.setItem("color", themeColor);
}


//website theme color changing
function websiteThemeChanging() {
	const themeStylessheetLink = document.querySelector('.themeStylesheetLink');

	if (localStorage.getItem("theme") === "dark") {
		themeStylessheetLink.setAttribute("href", `css/themes/dark.css`);
	}

	document.querySelector('.theme-button').addEventListener('click', function() {
	if (localStorage.getItem("theme") === "dark") 
	{
		localStorage.setItem("theme", "light");
		themeStylessheetLink.setAttribute("href", `css/themes/light.css`);
	} else {
		localStorage.setItem("theme", "dark");
		themeStylessheetLink.setAttribute("href", `css/themes/dark.css`);
	}
	});
}
websiteThemeChanging();


//slides change
function changeSlide(n) {
	var slides = document.querySelectorAll(".project-element");
	const slidesLenght = slides.length;

	if (n > slides.length) {slideIndex = 1}

	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}

	
	if (slideIndex-2 < 0) {
		slides[slidesLenght-1].style.display = "block"; 
		slides[slidesLenght-1].classList.remove("right", "middle");
		slides[slidesLenght-1].classList.add("left");

	} else {
		slides[slideIndex-2].style.display = "block";  
		slides[slideIndex-2].classList.remove("right", "middle");
		slides[slideIndex-2].classList.add("left");
	}

	slides[slideIndex-1].style.display = "block";  
	slides[slideIndex-1].classList.remove("right", "left");
	slides[slideIndex-1].classList.add("middle");

	if (slideIndex > slidesLenght-1) {
		slides[0].style.display = "block";    
		slides[0].classList.remove("left", "middle");
		slides[0].classList.add("right");
		
	} else {
		slides[slideIndex].style.display = "block";  
		slides[slideIndex].classList.remove("left", "middle");
		slides[slideIndex].classList.add("right");
	}
  }
var slideIndex = 1;
changeSlide(slideIndex);

function plusIndex(n) {
	changeSlide(slideIndex += n);
}


//copy email to clipboard
function copyEmail() {
	document.querySelector('#copy-button-email').addEventListener('click', function() {
		navigator.permissions.query({name: "clipboard-write"}).then((result) => {
			// If permission to write to the clipboard is granted or if the user will
			// be prompted to allow it, we proceed.
			if (result.state === 'granted' || result.state === 'prompt') {
				navigator.clipboard.writeText("oliwiagowor@gmail.com")
					.then(text => {
						//message about successful copy
					})
					.catch(err => {
						console.error("Failed to write to clipboard: ", err);
					});
			}	
		});
	});
}
copyEmail();


//copy phone number to clipboard
function copyPhone() {
	document.querySelector('#copy-button-phone').addEventListener('click', function() {
		navigator.permissions.query({name: "clipboard-write"}).then((result) => {
			// If permission to write to the clipboard is granted or if the user will
			// be prompted to allow it, we proceed.
			if (result.state === 'granted' || result.state === 'prompt') {
				navigator.clipboard.writeText("531252664")
					.then(text => {
						//message about successful copy 
					})
					.catch(err => {
						console.error("Failed to write to clipboard: ", err);
					});
			}	
		});
	});
}
copyPhone();

function sendEmail () {
	Email.send({
		SecureToken : "06c2963a-ffa7-47d6-88bb-9f6edbf9c782",
		To : 'oliwiagowor@gmail.com',
		From : 'oliwiagowor@gmail.com',
		Subject : document.querySelector('#topic').value,
		Body : "E-mail: " + document.querySelector('#email').value.trim() + "<br>" + 
		"Name: " + document.querySelector('#name').value.trim() + "<br>" + "Message: " + document.querySelector('#message').value.trim()
	}).then(
	  message => alert("Message sent!")
	);
}