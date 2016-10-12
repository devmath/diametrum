var launcher = document.querySelector('.flaticon-search'),
	searchSection = document.querySelector('.search'),
	inputSearch = document.querySelector('#search'),
	quitSearch = document.querySelector('#quit-search'),
	searchActive = false;

launcher.addEventListener('click', function() {
	searchSection.style.height = '100vh';
	searchActive = true;
});

quitSearch.addEventListener('click', function() {
	searchSection.style.height = '0';
	searchActive = false;
});