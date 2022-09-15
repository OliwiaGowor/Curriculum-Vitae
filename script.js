document.querySelector('.hamburger-icon-mobile').addEventListener('click', function() {
	this.classList.toggle('open');
});


const colorSelect = document.querySelector('.color-circle');
const colorStylessheetLink = document.querySelector('.colorStylesheetLink');
const currentColor = localStorage.getItem("color") || "pink";
function activateColor(themeColor) {
	colorStylessheetLink.setAttribute("href", `css/colors/${themeColor}.css`);
	localStorage.setItem("color", themeColor);
	};


	
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




	
