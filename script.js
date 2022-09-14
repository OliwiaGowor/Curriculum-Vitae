document.querySelector('.hamburger-icon-mobile').addEventListener('click', function() {
	this.classList.toggle('open');
});


	const colorSelect = document.querySelector('.color-circle');
	const themeStyleSheetLink = document.querySelector('#themeStyleSheetLink');

	function activateColor(themeColor) {
		themeStyleSheetLink.setAttribute("href", 'css/colors/${themeColor}.css');
		localStorage.setItem("color", themeColor);
		};


	
