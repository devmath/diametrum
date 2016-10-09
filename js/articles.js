var categoriesList = document.querySelector('.categories-list'),
	categoryItem = categoriesList.getElementsByTagName('li');

for (var i = 0; i < categoryItem.length; i++) {
	categoryItem[i].addEventListener('click', function() {
		for (var j = 0; j < categoryItem.length; j++) {
			categoryItem[j].style.borderBottom = 'none';
		}

		this.style.borderBottom = '1px solid #0a3367';
		searching(this.getAttribute('category'));
	});
}

document.querySelector('#back-to-init').addEventListener('click', function() {
	article = document.getElementsByClassName('each-article');

	for (var i = 0; i < article.length; i++) {
		article[i].style.display = '-o-flex';
		article[i].style.display = '-ms-flex';
		article[i].style.display = '-moz-flex';
		article[i].style.display = '-webkit-flex';
		article[i].style.display = 'flex';
	}
	
	for (var j = 0; j < categoryItem.length; j++) {
		categoryItem[j].style.borderBottom = 'none';
	}
})