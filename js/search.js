var input = document.getElementById('search'),
	entry = '',
	article = '',
	searchButton = document.getElementsByClassName('flaticon-search');

searchButton.addEventListener = function() {
	entry = input.value;
	hideShow(entry);
};

function hideShow(value) {
	article = document.getElementsByClassName('each-article');
	
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