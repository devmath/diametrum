var input = document.getElementById('search'),
	entry = '',
	something = '',
	counter = 0,
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
			content = that.querySelector('.content')
			ul = content.querySelector('.tags'),
			li = ul.getElementsByClassName('tag'),
			attr = li.getAttribute('tag');

		console.log(attr == 'test');
		/*if (article[i].querySelector('.tag').getAttribute(value) == value) {
			console.log(article[i].querySelector('.tag').getAttribute(value));
		} else {
			console.log('fail');
		}*/
	}
}