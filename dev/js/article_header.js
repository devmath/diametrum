var article_header = document.getElementsByClassName('header__article');

if (article_header.length > 0 && window_width > 960) {
	window.addEventListener('scroll', function() {
		var article_background = article_header[0].querySelector('.header__article_background'),
			article_title 	   = article_header[0].querySelector('.header__article_title'),
			article_time 	   = article_header[0].querySelector('.header__article_time'),
			article_date 	   = article_header[0].querySelector('.header__article_date');

		if (rand < 3) {
			// left to right
			article_date.style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
			article_time.style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
			article_title.style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
		} else if (rand < 6) {
			// rotate
			if ((window.pageYOffset / 15) < 20) {
				article_title.style.transform = 'rotate(' + (window.pageYOffset / 15) + 'deg)';
				article_time.style.transform = 'rotate(' + (window.pageYOffset / 15) + 'deg)';
				article_date.style.transform = 'rotate(' + (window.pageYOffset / 15) + 'deg)';
			}
		} else if (rand < 8) {
			// expand
			article_date.style.transform = 'translateY(-' + (window.pageYOffset / 3) + 'px)';
			article_time.style.transform = 'translateY(' + (window.pageYOffset / 3) + 'px)';
		} else {
			// right to left
			article_date.style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
			article_time.style.transform = 'translateX(-' + (window.pageYOffset / 5) + 'px)';
			article_title.style.transform = 'translateX(' + (window.pageYOffset / 5) + 'px)';
		}

		article_background.style.transform = 'translateY(' + (window.pageYOffset / 10) + 'px)';
	});
}