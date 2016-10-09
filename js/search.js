var input = document.getElementById('search-entry'),
	searchButton = document.getElementById('search'),
	entry = '',
	article = '',
	articleSection = document.getElementById("articles"),
	undoButton = document.getElementById("undo-search"),
	alertSection = document.getElementById("alert");

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

function displayError() {
	articles.style.display = 'none';
	alertSection.style.display = 'block';
	input.value = '';

	return true;
}

function undoSearch() {
	articles.style.display = '-o-flex';
	articles.style.display = '-ms-flex';
	articles.style.display = '-moz-flex';
	articles.style.display = '-webkit-flex';
	articles.style.display = 'flex';
	alertSection.style.display = 'none';
	return true;
}

function searching(value) {	
	article = document.getElementsByClassName('each-article');

	if (verify(value)) {
		for (var i = 0; i < article.length; i++) {
			var that = article[i],
				tags = that.getAttribute('tags');

			if (tags.indexOf(value) !== -1) {
				//
			} else {
				that.style.display = 'none';
			}
		}
	} else {
		displayError();
	}

	return true;
}

searchButton.addEventListener('click', function() {
	entry = input.value;
	searching(entry);
});

undoButton.addEventListener('click', function() {
	undoSearch();
});