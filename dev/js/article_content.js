var article_section = document.getElementsByClassName('article');

if (article_section.length > 0 && window_width > 960) {
	var article_each = article_section[0].getElementsByTagName('article');

	window.addEventListener('scroll', function() {
		if ((window.pageYOffset / 4) < 150) {
			for (var i = 0; i < article_each.length; i++) {
				article_each[i].style.transform = 'translateY(-' + (window.pageYOffset / 4) + 'px)';
			}
		}
	});
}