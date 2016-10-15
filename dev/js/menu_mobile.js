var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	menu  = document.querySelector('.nav'),
	logo  = document.querySelector('.logo');

if (width < 960) {
	logo.setAttribute('href', 'javascript:void(0);');

	logo.addEventListener('click', function(e) {
		if (logo.classList.contains('act')) {
			menu.style.transform = 'translateY(-118px)';
			logo.classList.remove(' act');
		} else {
			menu.style.transform = 'translateY(0)';
			logo.className += ' act';
		}
	});
}