var menu  = document.querySelector('.menu'),
	logo  = menu.querySelector('.menu__logo');

if (window_width < 960) {
	logo.setAttribute('href', 'javascript:void(0);');

	logo.addEventListener('click', function(e) {
		if (logo.classList.contains('act')) {
			menu.style.transform = 'translateY(-152px)';
			logo.classList.remove('act');
		} else {
			menu.style.transform = 'translateY(0)';
			logo.classList.add('act');
		}
	});
}