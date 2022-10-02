

//hamburger icon opening
document.querySelector('.hamburger-icon-mobile').addEventListener('click', function() {
	this.classList.toggle('open');
	document.querySelector('.header-nav').classList.toggle('open');
	document.querySelector('.header-nav').classList.toggle('mobile');
});

var navElements = document.querySelectorAll('.nav-element');
for (i = 0; i < navElements.length; i++) {
	navElements[i].addEventListener('click', function() {
	document.querySelector('.hamburger-icon-mobile').classList.toggle('open');
	document.querySelector('.header-nav').classList.remove('open');
	document.querySelector('.header-nav').classList.remove('mobile');
	});
}


//website color changing
const colorSelect = document.querySelector('.color-circle');
const colorStylessheetLink = document.querySelector('.colorStylesheetLink');
const currentColor = localStorage.getItem("color") || "pink";

function activateColor(themeColor) {
	colorStylessheetLink.setAttribute("href", `css/colors/${themeColor}.css`);
	localStorage.setItem("color", themeColor);
	};


//website theme color changing	
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
