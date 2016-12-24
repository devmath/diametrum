var header = document.getElementsByClassName('header');

if (header.length > 0 && window_width > 960) {
	window.addEventListener('scroll', function() {
		if (rand < 3) {
			header[0].querySelector('.header__title').style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
		} else if (rand < 6) {
			header[0].querySelector('.header__title').style.transform = 'translateY(' + (window.pageYOffset / 2) + 'px)';
		} else {
			header[0].querySelector('.header__title').style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
		}

		header[0].querySelector('.header__background').style.transform = 'translateY(' + (window.pageYOffset / 10) + 'px)';
	});
}