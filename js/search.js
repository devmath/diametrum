var input = document.getElementById('search'),
	entry = '',
	something = false,
	counter = 0,
	article_counter = '',
	article = '';

function showEntry() {
	entry = input.value;
	hideShow(entry);
}

function searchTags(value) {
	console.log(document.getElementsByClassName(value));
}

function hideShow(value) {
	article = document.getElementsByClassName('each-article');
	
	for (var i = 0; i < article.length; i++) {
		var that = article[i],
			tags = that.getAttribute('tags');

		if (tags.indexOf(value) !== -1) {
			//console.log(that);
		} else {
			that.style.display = 'none';
			console.log('worng');
		}
	}

	return true;
}