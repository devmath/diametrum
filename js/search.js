var input = document.getElementById('search-entry'),
	searchButton = document.getElementById('search'),
	entry = '',
	article = '';

searchButton.addEventListener('click', function() {
	entry = input.value;
	searching(entry);
});

function searching(value) {	
	article = document.getElementsByClassName('each-article');

	if (verify(value)) {
		console.log('true');
	} else {
		console.log('false');
	}

	for (var i = 0; i < article.length; i++) {
		var that = article[i],
			tags = that.getAttribute('tags');

		if (tags.indexOf(value) !== -1) {
			//
		} else {
			that.style.display = 'none';
		}
	}

	return true;
}

function verify(value) {
	var counting_articles = 0;

	for (var i = 0; i < article.length; i++) {
		var that = article[i],
			tags = that.getAttribute('tags');

		if (tags.indexOf(value) !== -1) {
			counting_articles++;
		}
	}

	if (counting_articles > 0) {
		return true;
	} else {
		return false;
	}
}