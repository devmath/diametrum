function aboutModal(value) {
	var about_modal = document.getElementsByClassName('about__modal_content');

	for (var i = 0; i < about_modal.length; i++) {
		var that = about_modal[i];

		if (that.getAttribute('what') === value) {
			document.getElementsByClassName('about__modal')[0].style.display = 'block';

			that.style.display = 'block';
			document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
		}
	}
}

var quit_modal = document.getElementsByClassName('about__modal_quit');

if (quit_modal.length > 0) {
	var about_modal = document.getElementsByClassName('about__modal_content');

	quit_modal[0].onclick = function() {
		for (var i = 0; i < about_modal.length; i++) {
			about_modal[i].style.display = 'none';
		}

		document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
		document.getElementsByClassName('about__modal')[0].style.display = 'none';
	}
}